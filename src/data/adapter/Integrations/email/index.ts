import { MailDTO, UserMailDTO } from "@/data/db/DTOs/EmailDTO";
import { MailType } from "@/resources/enums";
import { createTransport } from "nodemailer";
import Mail from "nodemailer/lib/mailer";


class EmailService {
    private static _instance: EmailService;

    private _transport: Mail;

    private constructor() {
        this._transport = createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_ADDRESS,
                pass: process.env.EMAIL_PASSWORD,
            },
        });
    }

    public static get instance() {
        if (!this._instance) {
            this._instance = new EmailService;
        }
        return this._instance;
    }

    sendEmail = async (mailBody: UserMailDTO, mailType: MailType) => {

        const mailOptions = this.getMailOptions(mailBody, mailType);

        const sendMailResponse = await this._transport.sendMail(mailOptions);

        return { message: "Email Sent", sentEmail: !sendMailResponse }
    }   

    private getMailOptions(mailBody: UserMailDTO, mailType: MailType): MailDTO {
        switch (mailType) {
            case MailType.EvidenceCreatedConfirmation:
                return this.getEvidenceCreatedMailOptions(mailBody);
        }
    }

    private getEvidenceCreatedMailOptions = ({ email, firstName, workName, cid }: UserMailDTO) => {
        const body = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap"
        rel="stylesheet">   
</head>

<body>
     <div style="
            width: 50%;
            margin: 5rem auto;
            background: #5f437f;
            padding: 1.2rem;
            border-radius: 2rem;
            font-family: 'Red Hat Display', sans-serif;
            color: white;
        ">

        <h1 style="opacity: 60%; width: 90%;
            font-size:60px;
            text-align: center;
            padding: 1.2rem;">
            congratulations
        </h1>

        <h3>Hey${firstName ? ` ${firstName}` : ""}!</h3>
        <p>Your work is now securely stored on ®️ Resolutio On Creator Armour.</p>
        <p>Work Name: ${workName}</p>
        <p>Content Identifier (CID): <span style="padding: 4px;
            background: #5f437f; color: white;">${cid} </span></p>
        <p>The CID is your proof of work to secure your copyright</p>
        <p style="padding: 4px; border-radius: 5px; background: white; color:#5f437f">
            Click <a href="https://gateway.lighthouse.storage/ipfs/${cid}">Here</a> To View The Details Of Your Work!
        </p>
    </div>

</body>

</html>`

        return {
            body,
            subject: "Congrats: Your Work Has Been Eternalized",
            to: email,
            html: body,
            from: process.env.EMAIL_ADDRESS,
        };
    }


}

const mailService = EmailService.instance;
export default mailService;