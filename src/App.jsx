import React from "react";
import Card1 from "./components/ui/Card1";
import User from "./components/ui/User";

const App = () => {
  const arr1 = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full-time",
      tag2: "Junior Level",
      pay: "$60/hour",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      post: "Software Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$95/hour",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "10 days ago",
      post: "Backend Developer",
      tag1: "Full-time",
      tag2: "Junior Level",
      pay: "$55/hour",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$100/hour",
      location: "Pune, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "1 week ago",
      post: "Data Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$110/hour",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Cloud Solutions Architect",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$120/hour",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/openai.com",
      companyName: "OpenAI",
      datePosted: "2 weeks ago",
      post: "Machine Learning Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$150/hour",
      location: "Remote, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Embedded Systems Engineer",
      tag1: "Full-time",
      tag2: "Junior Level",
      pay: "$70/hour",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/spotify.com",
      companyName: "Spotify",
      datePosted: "10 weeks ago",
      post: "Full Stack Developer",
      tag1: "Part-time",
      tag2: "Senior Level",
      pay: "$80/hour",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      companyName: "NVIDIA",
      datePosted: "5 weeks ago",
      post: "AI Research Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$140/hour",
      location: "Pune, India",
    },
  ];
  console.log(arr1);
  return (
    <>
      <div className="parent flex  ">
        {/* <Card1 />
        <Card1 />
        <Card1 /> */}
      </div>
      {/* <div className="parent flex gap-5 flex-wrap items-center justify-center m-5">
        <Card user="Jian" />
        <Card user="Doremon" />

      </div> */}
    </>
  );
};

export default App;
