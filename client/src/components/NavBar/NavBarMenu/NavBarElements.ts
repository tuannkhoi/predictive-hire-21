export interface elementInterface {
  readonly title: string;
  readonly children?: elementInterface[];
}

const elements: elementInterface[] = [
  {
    title: "Products",
    children: [
      { title: "Chat Interview" },
      { title: "Video Interview" },
      { title: "Group Interview" },
      { title: "Candidate Feedback" },
      { title: "Candidate Insights" },
      { title: "People Insights" },
      { title: "Integration" },
    ],
  },
  {
    title: "Platform",
    children: [
      { title: "Candidate Experience" },
      {
        title: "Eliminating Bias",
        children: [
          {
            title: "Another level",
            children: [
              {
                title: "Yet another level",
                children: [{ title: "Okay final level" }],
              },
            ],
          },
        ],
      },
      { title: "Speed to hire" },
    ],
  },
  {
    title: "Why Us",
    children: [
      { title: "The Science" },
      { title: "Successful Customers" },
      { title: "Case Study" },
      { title: "Award Winning" },
      { title: "Featured In" },
    ],
  },
  {
    title: "Resources",
    children: [
      { title: "Saving Calculator" },
      { title: "Ultimate Guide" },
      { title: "DEI Report" },
      { title: "Fair eBook" },
      { title: "Inclusion eBook" },
      { title: "Experience eBook" },
      { title: "Retail eBook" },
      { title: "Automation eBook" },
      { title: "Other Resources" },
    ],
  },
  {
    title: "Blog",
    children: [
      { title: "Candidate Experience With AI" },
      { title: "Conversational AI" },
      { title: "In The Press" },
    ],
  },
  {
    title: "Contact",
    children: [
      { title: "Phone And Email" },
      { title: "Carrier Pigeon" },
      { title: "Hogwarts Owl" },
    ],
  },
];

export default elements;
