import {
  Calendar,
  Clock,
  Link,
  MapPin,
  DollarSign,
  Mail,
  Phone,
  Contact,
} from "lucide-react";

const formatDate = (value) =>
  new Date(value).toLocaleDateString("en-GB", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

export const JOB_INFO_FIELDS = [
  {
    icon: Calendar,
    type: "date",
    label: "Date Applied",
    key: "dateApplied",
    format: formatDate,
  },
  {
    icon: Clock,
    type: "date",
    label: "Interview Date",
    key: "interviewDate",
    format: formatDate,
  },
  {
    icon: Clock,
    type: "date",
    label: "Follow-up Date",
    key: "followUpDate",
    format: formatDate,
  },
  {
    icon: Link,
    label: "Source",
    key: "jobSource",
    options: [
      { value: "linkedin", label: "LinkedIn" },
      { value: "indeed", label: "Indeed" },
      { value: "companywebsite", label: "Company Website" },
      { value: "referral", label: "Referral" },
      { value: "recruiter", label: "Recruiter" },
      { value: "other", label: "Other" },
    ],
  },
  {
    icon: MapPin,
    type: "text",
    label: "Location",
    key: "jobLocation",
  },
  {
    icon: DollarSign,
    type: "text",
    label: "Salary Range",
    key: "jobSalaryRange",
  },
  {
    icon: Link,
    type: "text",
    label: "Application URL",
    key: "applicationURL",
    span: true,
  },
];

export const CONTACT_INFO_FIELDS = [
  {
    icon: Contact,
    type: "text",
    label: "Contact Name",
    key: "contactName",
  },
  {
    icon: Mail,
    type: "email",
    label: "Contact Email",
    key: "contactEmail",
  },
  {
    icon: Phone,
    type: "tel",
    label: "Contact Phone",
    key: "contactPhone",
  },
  {
    label: "Description",
    type: "input",
    key: "jobDescription",
    span: true,
  },
];
