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
    label: "Date Applied",
    key: "dateApplied",
    format: formatDate,
  },
  {
    icon: Clock,
    label: "Interview Date",
    key: "interviewDate",
    format: formatDate,
  },
  {
    icon: Clock,
    label: "Follow-up Date",
    key: "followUpDate",
    format: formatDate,
  },
  {
    icon: Link,
    label: "Source",
    key: "jobSource",
  },
  {
    icon: MapPin,
    label: "Location",
    key: "jobLocation",
  },
  {
    icon: DollarSign,
    label: "Salary Range",
    key: "jobSalaryRange",
  },
  {
    icon: Link,
    label: "Application URL",
    key: "applicationURL",
    span: true,
  },
];

export const CONTACT_INFO_FIELDS = [
  {
    icon: Contact,
    label: "Contact Name",
    key: "contactName",
  },
  {
    icon: Mail,
    label: "Contact Email",
    key: "contactEmail",
  },
  {
    icon: Phone,
    label: "Contact Phone",
    key: "contactPhone",
  },
  {
    label: "Description",
    key: "jobDescription",
    span: true,
  },
];
