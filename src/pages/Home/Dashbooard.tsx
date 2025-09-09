import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        Dashboard
      </h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle>Total Researches</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">128</p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle>Upvotes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">342</p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle>Bookmarks</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">56</p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle>Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">89</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Researches */}
      <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
        Recent Researches
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Card key={item} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>Research Title {item}</CardTitle>
              <CardDescription>by Author {item}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a semper dui, ut dictum quam.
              </p>
              <div className="flex justify-between items-center">
                <Button size="sm">View</Button>
                <p className="text-sm text-gray-500 dark:text-gray-400">Upvotes: {Math.floor(Math.random() * 100)}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
