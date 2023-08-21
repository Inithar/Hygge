export const methodsSectionData = {
  sectionTitle: "We are always here to help you",
  sectionSubtitle: "Ask Questions",
  methods: [
    {
      title: "Customer Service",
      body: "Please send us an email at care@hygge.com",
    },
    {
      title: "Large Orders",
      body: "If you are thinking of making a very large order, please feel free to contact us at sales@hygge.com and we will give you a special discount",
    },
    {
      title: "Public Relations",
      body: "You can contact our media team by sending an email media@hygge.com",
    },
    {
      title: "Other Enquiries",
      body: "For all of your other questions, please send us an email at general@hygge.com",
    },
  ],
};

export const formSectionData = {
  sectionTitle: "Please fill out the contact form",
  sectionSubtitle: "Reach Out to Us ",
  form: {
    buttonText: "Send",
    fullName: {
      label: "Full Name",
      placeholder: "John Smith",
      error: "Full name is required",
    },
    email: {
      label: "Email Address",
      placeholder: "johnsmith@gmail.com",
      error: { required: "Email is required", incorrect: "Email address is incorrect" },
    },
    subjectOptions: [
      {
        label: "Customer Service",
        value: "customerService",
      },
      {
        label: "Large Orders",
        value: "largeOrder",
      },
      {
        label: "Public Relations",
        value: "publicRelations",
      },
      {
        label: "Other Enquiries",
        value: "otherEnquiries",
      },
    ],
    message: {
      label: "Message",
      placeholder: "Hi, I am just wondering where can I find your refund policy?",
      error: "Message is required",
    },
  },
};
