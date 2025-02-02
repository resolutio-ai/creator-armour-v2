export type MailDTO = {
    body: string;
    subject: string;
    to: string;
    html: string;
    from: string | undefined;
}

export type UserMailDTO = {
    email: string,
    firstName: string,
    workName?: string,
    cid?: string,
}