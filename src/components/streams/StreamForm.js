import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return <span className="text-red-500">{error}</span>;
    }
  }
  renderedInput = ({ input, label, meta }) => {
    return (
      <div className="flex flex-col w-full gap-3">
        <label className="text-slate-200 text-lg">{label}</label>
        <input
          {...input}
          className="bg-zinc-600  rounded-md px-1 py-2 outline-none text-slate-100 focus:outline-purple-600 outline-double outline-2"
        />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = (formVal) => {
    this.props.onSubmit(formVal);
  };
  render() {
    return (
      <section className="h-screen container flex justify-center items-center">
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="flex flex-col h-fit gap-5 shadow-md bg-neutral-900 p-10 w-3/6 rounded-md shadow-slate-900 md:p-14 "
        >
          <h1 className="text-slate-200 text-3xl font-bold mb-5 text-start">
            {this.props.h1}
          </h1>
          <Field
            name="title"
            component={this.renderedInput}
            label="Enter Title"
          />
          <Field
            name="description"
            component={this.renderedInput}
            label="Enter Description"
          />
          <button className="text-slate-100 font-medium bg-purple-700 py-4 px-10 rounded-md mt-5 hover:bg-purple-900">
            {this.props.btn}
          </button>
        </form>
      </section>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};
export default reduxForm({
  form: "streamForm",
  validate: validate,
})(StreamForm);
