import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./NewFeedback.css";

class NewFeedback extends React.Component {
  render() {
    return (
      <div className="newFeedbackContainer">
        <Formik
          initialValues={{ subject: "" }}
          validationSchema={Yup.object().shape({
            subject: Yup.string()
              .min(10, "Subject must be at least 10 characters")
              .max(40, "Subject must be 40 characters or less")
              .required("Subject is required")
            // description: Yup.string()
            //   .min(10, "Description must be at least 10 characters")
            //   .max(200, "Description must be 200 characters or less")
            //   .required("Description is required")
            // project: Yup.string().required("Project is required")
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            //TODO pass values here
            this.props.onNewFeedbackSubmit(values);
            setSubmitting(false);
            resetForm();
          }}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <label htmlFor="subject" style={{ display: "block" }}>
                  Subject
                </label>
                <input
                  id="subject"
                  placeholder="Provide a brief subject"
                  type="text"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.subject && touched.subject
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.subject && touched.subject && (
                  <div className="input-feedback">{errors.subject}</div>
                )}
                <button
                  type="button"
                  className="reset-button"
                  onClick={handleReset}
                  disabled={!dirty || isSubmitting}
                >
                  Reset
                </button>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            );
          }}
        </Formik>
      </div>
    );
  }
}

export default NewFeedback;
