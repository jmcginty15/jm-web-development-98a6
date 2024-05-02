import { useRef, useState } from "react";
import { Form, useNavigate } from "@remix-run/react";
import emailjs from "emailjs-com";

export default function ContactForm({
  keys,
}: {
  keys: {
    serviceId: string;
    templateId: string;
    userId: string;
  };
}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    contact: "Email",
    source: "",
    project: "",
  });
  const [errors, setErrors] = useState({
    errors: false,
    firstName: false,
    lastName: false,
    emailReq: false,
    emailInv: false,
    phone: false,
  });
  const ref = useRef<HTMLDivElement>(null);
  const emailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  const navigate = useNavigate();

  const handleChange = (evt: any) => {
    if (evt.target.name === "phone") {
      let currentValue = evt.target.value.replace(/[\D]/g, "");

      if (evt.target.value.length === 4 && evt.target.value.slice(0, 1) === "(")
        currentValue = currentValue.slice(0, 2);
      else if (currentValue.length === 3) currentValue = `(${currentValue})`;
      else if (currentValue.length > 3 && currentValue.length <= 6)
        currentValue = `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;
      else if (currentValue.length > 6)
        currentValue = `(${currentValue.slice(0, 3)}) ${currentValue.slice(
          3,
          6
        )}-${currentValue.slice(6, 10)}`;

      setFormData({ ...formData, phone: currentValue });
    } else setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    const newErrors = { ...errors };
    newErrors.errors = false;

    if (!formData.firstName) {
      newErrors.firstName = true;
      newErrors.errors = true;
    }

    if (!formData.lastName) {
      newErrors.lastName = true;
      newErrors.errors = true;
    }

    if (!formData.email) {
      newErrors.emailInv = false;
      newErrors.emailReq = true;
      newErrors.errors = true;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.emailInv = true;
      newErrors.emailReq = false;
      newErrors.errors = true;
    }

    if (!formData.phone) {
      newErrors.phone = true;
      newErrors.errors = true;
    }

    if (newErrors.errors) setErrors(newErrors);
    else {
      setErrors({
        errors: false,
        firstName: false,
        lastName: false,
        emailReq: false,
        emailInv: false,
        phone: false,
      });
      emailjs.sendForm(
        keys.serviceId,
        keys.templateId,
        evt.target,
        keys.userId
      );
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        contact: "Email",
        source: "",
        project: "",
      });
      navigate("/thank-you");
    }
  };

  return (
    <div ref={ref} className="ContactForm">
      <div className="ContactForm-info">
        <h2 className="ContactForm-title">Get in touch</h2>
        <h3 className="ContactForm-title">Phone</h3>
        <h6>(785) 213-1247</h6>
        <h3 className="ContactForm-title">Email</h3>
        <h6>
          <a className="ContactForm-link" href="mailto:webdev@jasonmcginty.net">
            webdev@jasonmcginty.net
          </a>
        </h6>
        <h3 className="ContactForm-title">Consultations</h3>
        <h6>
          I offer free consultations! If you're in the Tulsa/Stillwater area,
          I'd be happy to meet up in person to discuss your project. Otherwise,
          a phone call or video chat will work.
        </h6>
      </div>
      <Form className="ContactForm-form" method="POST" onSubmit={handleSubmit}>
        <h2 className="ContactForm-title">Request a free consultation</h2>
        <div className="ContactForm-upper">
          <div className="ContactForm-grid-item">
            <label className="ContactForm-title" htmlFor="firstName">
              First name <span className="ContactForm-required">*</span>
            </label>
            <input
              name="firstName"
              className="ContactForm-input"
              type="text"
              placeholder="John"
              onChange={handleChange}
              value={formData.firstName}
            />
            {errors.firstName && (
              <div className="ContactForm-error">Required field</div>
            )}
          </div>
          <div className="ContactForm-grid-item">
            <label className="ContactForm-title" htmlFor="lastName">
              Last name <span className="ContactForm-required">*</span>
            </label>
            <input
              name="lastName"
              className="ContactForm-input"
              type="text"
              placeholder="Smith"
              onChange={handleChange}
              value={formData.lastName}
            />
            {errors.lastName && (
              <div className="ContactForm-error">Required field</div>
            )}
          </div>
          <div className="ContactForm-grid-item">
            <label className="ContactForm-title" htmlFor="email">
              Email <span className="ContactForm-required">*</span>
            </label>
            <input
              name="email"
              className="ContactForm-input"
              type="text"
              placeholder="john.smith@mydomain.com"
              onChange={handleChange}
              value={formData.email}
            />
            {errors.emailReq && (
              <div className="ContactForm-error">Required field</div>
            )}
            {errors.emailInv && (
              <div className="ContactForm-error">Invalid email format</div>
            )}
          </div>
          <div className="ContactForm-grid-item">
            <label className="ContactForm-title" htmlFor="phone">
              Phone <span className="ContactForm-required">*</span>
            </label>
            <input
              name="phone"
              className="ContactForm-input"
              type="text"
              placeholder="(123) 456-7890"
              onChange={handleChange}
              value={formData.phone}
            />
            {errors.phone && (
              <div className="ContactForm-error">Required field</div>
            )}
          </div>
        </div>
        <label className="ContactForm-title" htmlFor="contact">
          Preferred contact method
        </label>
        <div className="ContactForm-input ContactForm-radio-group">
          <label>
            <input
              name="contact"
              type="radio"
              value="Email"
              checked={formData.contact === "Email"}
              onChange={handleChange}
            />{" "}
            Email
          </label>
          <label>
            <input
              name="contact"
              type="radio"
              value="Text"
              checked={formData.contact === "Text"}
              onChange={handleChange}
            />{" "}
            Text
          </label>
          <label>
            <input
              name="contact"
              type="radio"
              value="Call"
              checked={formData.contact === "Call"}
              onChange={handleChange}
            />{" "}
            Call
          </label>
        </div>
        <label className="ContactForm-title" htmlFor="source">
          How did you hear about me?
        </label>
        <input
          name="source"
          className="ContactForm-input"
          type="text"
          placeholder="Internet search, referral, etc."
          onChange={handleChange}
          value={formData.source}
        />
        <label className="ContactForm-title" htmlFor="project">
          Tell me a bit about your project!
        </label>
        <textarea
          name="project"
          className="ContactForm-input"
          placeholder="I need a website for my small business!"
          rows={4}
          onChange={handleChange}
          value={formData.project}
        />
        {errors.errors && (
          <div className="ContactForm-error">Check form errors</div>
        )}
        <button className="ContactForm-button" type="submit">
          Submit
        </button>
      </Form>
    </div>
  );
}
