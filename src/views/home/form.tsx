'use client';

import React, { useRef, useState } from 'react';
import { Formik, Form, Field, ErrorMessage , FormikHelpers} from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import Container from '@/components/container';

const ContactSchema = Yup.object().shape({
  fullName: Yup.string().required('Name is required'),
  practiceName: Yup.string().required('Practice name is required'),
  jobRole: Yup.string().required('Please select a job role'),
  crmSystem: Yup.string().required('Please select a CRM'),
  pmsSystem: Yup.string().required('Please select a PMS'),
  agreeToPolicy: Yup.boolean()
    .oneOf([true], 'You must agree to the privacy policy')
    .required(),
});

export interface ContactFormValues {
  fullName: string;
  practiceName: string;
  jobRole: string;
  crmSystem: string;
  pmsSystem: string;
  agreeToPolicy: boolean;
}

export default function TellUsAbout() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const initialValues: ContactFormValues = {
    fullName: '',
    practiceName: '',
    jobRole: '',
    crmSystem: '',
    pmsSystem: '',
    agreeToPolicy: false,
  };

const handleSubmit = (
    _values: ContactFormValues, 
    { resetForm }: FormikHelpers<ContactFormValues> 
  ) => {
    setIsSending(true);

    emailjs
      .sendForm(
        'service_2cnqd96', 
        'template_nrp7wbm', 
        formRef.current!,
        'nQBJzdhm_0rQ4QbLv'
      )
      .then(
        () => {
          setIsSending(false);
          alert('Thanks! We have received your demo request.');
          resetForm(); // Now TypeScript knows exactly what this function is
        },
        (error) => {
          setIsSending(false);
          console.error('EmailJS Error:', error);
          alert('Failed to send request. Please try again.');
        }
      );
  };

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Content */}
          <div className="max-w-[480px] ">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[20px] border-[.3px] border-[#3E595A] bg-[#E9F7F2] text-green text-[10px] sm:text-sm font-medium mb-3">
              <span className="w-3 h-3 rounded-[20px] bg-green" />
              Book a personalised demo
            </div>
            
            <h2 className="font-primary max-w-[215px] sm:max-w-[480px]  text-black text-[18px] sm:text-[32px] md:text-h2 font-bold leading-[1.1] mb-4 sm:mb-8">
              Tell us about your <span className="font-tertiary sadg text-green font-normal">practice</span>
            </h2>
            
            <p className="text-black text-sm md:text-base font-normal max-w-[440px]  sm:max-w-[480px] leading-relaxed mb-5 sm:mb-10 font-primary">
              Share a few details and we will show you exactly how TeloAI fits into your existing workflow.
            </p>

            <ul className="space-y-4 sm:block hidden">
              {['30-minute personalised walkthrough', 'Live ROI calculation', 'No obligation'].map((item, i) => (
                <li key={i} className="flex  items-center gap-3 text-[10px] sm:text-sm md:text-base text-text font-primary">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#27B17E] flex items-center justify-center text-white text-[10px] font-normal">
                    -
                  </span>
                  {item}
                </li>
                
              ))}
            </ul>
            <ul className="space-y-4 sm:hidden block">
              {['30-minute personalised walkthrough', 'Live ROI calculation', 'No obligation'].map((item, i) => (
                <li key={i} className="flex  items-center gap-3 text-text text-[10px] sm:text-sm md:text-base font-primary">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#27B17E] flex items-center justify-center text-white  font-normal">
                    ✓
                  </span>
                  {item}
                </li>
                
              ))}
            </ul>
          </div>


{/* Right Form Card */}
<div className="bg-white shadow-[0px_4px_20px_0px_#0000001A] border border-[#3E595A33] p-4 sm:p-8 md:p-10 sm:rounded-[20px] rounded-[10px]"> 
  <Formik
    initialValues={initialValues}
    validationSchema={ContactSchema}
    onSubmit={handleSubmit}
  >
    {({ errors, touched, isSubmitting }) => ( // Added missing render props parenthesis
      <Form ref={formRef} className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium mb-2 text-black">Your Name</label>
          <Field
            name="fullName"
            placeholder="Dr Jane Smith"
            autoFocus
            className={`text-sm w-full px-4 py-3 rounded-lg border outline-none transition-all placeholder:text-[#65758B] ${
              errors.fullName && touched.fullName 
                ? 'border-red-500' 
                : 'border-[#3E595A33] focus:border-2 focus:border-[#2ABD83]'
            }`}
          />
          <ErrorMessage name="fullName" component="p" className="text-red-500 text-xs mt-1" />
        </div>

        {/* Practice & Role */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
  <label className="block text-sm font-medium mb-2 text-black">Your Practice's Name</label>
  <Field
    as="select" // This converts the input to a dropdown
    name="practiceName"
    className="text-sm w-full px-4 py-3 rounded-lg border border-[#3E595A33] outline-none focus:border-2 focus:border-[#2ABD83] bg-white text-[#65758B]"
  >
    <option value="" disabled>Select your practice</option>
    <option value="smile_dental">Smile Dental Care</option>
    <option value="nuyu_dental">Nuyu Dental</option>
    <option value="kington_dental">Kington Dental</option>
    <option value="regent_dental">Regent Dental</option>
  </Field>
  <ErrorMessage name="practiceName" component="p" className="text-red-500 text-xs mt-1" />
</div>
          <div>
            <label className="block text-sm font-medium mb-2 text-black">Your Job Role</label>
            <Field 
              as="select" 
              name="jobRole" 
              className="text-sm w-full px-4 py-3 rounded-lg border border-[#3E595A33] outline-none focus:border-2 focus:border-[#2ABD83] bg-white text-[#65758B]"
            >
              <option value="">Select role</option>
              <option value="owner">Practice Owner / Manager</option>
              <option value="dentist">Dentist</option>
            </Field>
            <ErrorMessage name="jobRole" component="p" className="text-red-500 text-xs mt-1" />
          </div>
        </div>

        {/* CRM & PMS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-black">Which CRM System Do You Use</label>
            <Field 
              as="select" 
              name="crmSystem" 
              className="text-sm w-full px-4 py-3 rounded-lg border border-[#3E595A33] outline-none focus:border-2 focus:border-[#2ABD83] bg-white text-[#65758B]"
            >
              <option value="">e.g. HubSpot, Pipedrive, none</option>
              <option value="hubspot">HubSpot</option>
              <option value="pipedrive">Pipedrive</option>
            </Field>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-black">Which PMS System Do You Use</label>
            <Field 
              as="select" 
              name="pmsSystem" 
              className="text-sm w-full px-4 py-3 rounded-lg border border-[#3E595A33] outline-none focus:border-2 focus:border-[#2ABD83] bg-white text-[#65758B]"
            >
              <option value="">e.g. Dentally, SOE, R4</option>
              <option value="dentally">Dentally</option>
              <option value="soe">SOE</option>
            </Field>
          </div>
        </div>

        {/* Privacy Checkbox */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <Field type="checkbox" name="agreeToPolicy" className="w-4 h-4 accent-[#2ABD83]" />
            <label className="text-sm text-black">
              Please tick this box to agree to our <a href="#" className="text-[#2ABD83] underline">privacy policy</a> before continuing.
            </label>
          </div>
          <ErrorMessage name="agreeToPolicy" component="p" className="text-red-500 text-xs mt-1" />
        </div>

        <button
          type="submit"
          disabled={isSending || isSubmitting}
          className="cursor-pointer w-full bg-[#2ABD83] text-white font-bold py-4 sm:rounded-[15px] rounded-[5px] hover:text-white/70 transition-all disabled:opacity-50"
        >
          {isSending ? 'Sending...' : 'Request my demo'}
        </button>
      </Form>
    )} 
  </Formik>
</div>






        </div>
      </Container>
    </section>
  );
}