import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, FileChartColumnIncreasing } from "lucide-react";

export function BlogPostChart() {
    return (
        <Card className="w-full">
          <CardHeader>
            <span className="flex items-center justify-between">
              <CardTitle className="text-md font-medium">Blog posts</CardTitle>
              <FileChartColumnIncreasing className="text-primary w-5 h-5"/>
            </span>
            <CardDescription className="text-sm font-normal">Number of posted blogs</CardDescription>
          </CardHeader>

          <CardContent>
            <span className="text-5xl text-primary font-bold">12</span>
          </CardContent>

          <CardFooter>
            <Button
              variant="outline"
              className="flex gap-2 items-center"
            >
              Access posts menu
              <ChevronRight className="w-4 h-4"/>
            </Button>
          </CardFooter>
        </Card>
    )
}