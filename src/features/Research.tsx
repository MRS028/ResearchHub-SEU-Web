import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Research {
  id: number;
  title: string;
  authors: string[];
  university: string;
  publicationDate: string;
  tags: string[];
  summary: string;
  upvotes: number;
}

const fakeResearches: Research[] = [
  {
    id: 1,
    title: "AI-Based Seat Prediction in Bangladesh Railway",
    authors: ["Sheikh Rifat", "Kamal Hossain"],
    university: "Southeast University",
    publicationDate: "2025-05-15",
    tags: ["AI", "ML", "Railway"],
    summary:
      "This research explores machine learning models to predict seat availability in Bangladesh Railway trains, optimizing booking efficiency and passenger experience.",
    upvotes: 45,
  },
  {
    id: 2,
    title: "Sustainable Energy Solutions for Urban Areas",
    authors: ["Ayesha Rahman"],
    university: "SEU",
    publicationDate: "2025-03-20",
    tags: ["Energy", "Sustainability", "Urban Planning"],
    summary:
      "Investigates renewable energy integration in urban environments, analyzing solar, wind, and hybrid solutions to reduce carbon footprint.",
    upvotes: 72,
  },
  {
    id: 3,
    title: "Smart Agriculture using IoT and AI",
    authors: ["Tanvir Ahmed", "Rina Akter"],
    university: "SEU",
    publicationDate: "2025-04-10",
    tags: ["IoT", "AI", "Agriculture"],
    summary:
      "Introduces a smart agriculture platform combining IoT sensors and AI analytics to enhance crop yield and reduce resource wastage.",
    upvotes: 58,
  },
];

const Research: React.FC = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        Researches
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fakeResearches.map((research) => (
          <Card
            key={research.id}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
          >
            <CardHeader>
              <CardTitle>{research.title}</CardTitle>
              <CardDescription>
                {research.authors.join(", ")} - {research.university}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{research.summary}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {research.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Published: {research.publicationDate}
                </p>
                <Button size="sm" variant="outline">
                  Upvotes: {research.upvotes}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Research;
