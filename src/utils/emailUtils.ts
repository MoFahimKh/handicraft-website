import { EmailJSResponseStatus, sendForm } from '@emailjs/browser';

/**
 * Props for sending an email via the EmailService
 */
interface SendMailProps {
  /**
   * The form element containing the email data
   */
  form: HTMLFormElement;

  /**
   * Callback invoked if the email fails to send but no exception was thrown
   * @param response - The response from EmailJS with failure status
   */
  onFail: (response: EmailJSResponseStatus) => void;

  /**
   * Callback invoked if the email sends successfully
   * @param response - The response from EmailJS with success status
   */
  onSuccess: (response: EmailJSResponseStatus) => void;

  /**
   * Callback invoked if an error is thrown during the send process
   * @param error - The error object caught during sending
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onError: (error: any) => void;
}

/**
 * EmailService class handles sending emails using EmailJS
 */
export class EmailService {
  private serviceId: string;
  private templateId: string;
  private publicKey: string;

  /**
   * Initializes the EmailService with environment variables
   * @throws Will throw an error if any required environment variable is missing
   */
  constructor() {
    const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      throw new Error('Missing required environment variables for EmailService.');
    }

    this.serviceId = serviceId;
    this.templateId = templateId;
    this.publicKey = publicKey;
  }

  /**
   * Sends an email using the provided form and callbacks
   * @param props - The props including form element and callback functions
   * @returns A Promise that resolves when the email is sent or fails
   */
  public async sendMail({ form, onFail, onSuccess, onError }: SendMailProps): Promise<void> {
    try {
      const emailService = await sendForm(this.serviceId, this.templateId, form, this.publicKey);

      if (emailService.status === 200) {
        onSuccess(emailService);
      } else {
        onFail(emailService);
      }
    } catch (error) {
      onError(error);
    }
  }
}
