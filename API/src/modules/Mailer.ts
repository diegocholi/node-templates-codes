import nodemailer from 'nodemailer';
import mailerConfig from '../config/mailerConf.json'

interface MailOptions {
    from: string,
    to: string,
    subject: string,
    text: string
}

class Mailer {
    private transport: any;
    public mailOptions: MailOptions;
    constructor() {
        /*
            Configuração do mail TRAP
            https://mailtrap.io
        */
        this.transport = nodemailer.createTransport({
            host: mailerConfig.hostConfig.host,
            port: mailerConfig.hostConfig.port,
            auth: {
                user: mailerConfig.hostConfig.user,
                pass: mailerConfig.hostConfig.pass
            }
        });

        this.mailOptions = {
            from: mailerConfig.mailOptions.from,
            to: '',
            subject: mailerConfig.mailOptions.subject,
            text: mailerConfig.mailOptions.text
        }
    }

    getTransport() {
        return this.transport;
    }
}
export default Mailer;
