import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

interface MailchimpFormProps {
  mailchimpUrl: string;
  mailchimpU: string;
  mailchimpId: string;
}

// eslint-disable-next-line no-empty-pattern
export const MailchimpForm: React.FC<MailchimpFormProps> = ({  }) => {
  const postUrl ="https://gmail.us14.list-manage.com/subscribe/post?u=55dec60f6956b9b3b2a005821&amp;id=5d464d8863&amp;f_id=00a79be0f0";
  ;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
            />
        )}
        />
    </>
  )
};

export { Newsletter };
