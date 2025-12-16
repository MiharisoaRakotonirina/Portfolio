import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Calendar, Clock, LocateIcon, School } from "lucide-react";
import { FaUserTie } from "react-icons/fa";

export default function Experience() {
  return (
    <section
      id="experience"
      className="flex items-center flex-col justify-center mb-16"
    >
      <div className="max-w-4xl px-4 mx-auto flex flex-col items-center justify-center min-h-screen w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl mb-4">Education & Professional Path</h2>
          <p className="text-lg text-muted-foreground max-w-2xl text-center mx-auto">
            A summary of my academic path and professional experience in the
            tech sector.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 w-full">
          <div>
            <span className="flex items-center gap-4 mb-4">
              <School className="text-orange-400" size={32} />
              <h2 className="text-lg">Academic background</h2>
            </span>
            <Card>
              <CardHeader>
                <CardTitle>Bachelor's Degree in Computer Science</CardTitle>
                <CardDescription>
                  Haute Ecole d'Informatique ( HEI )
                </CardDescription>
                <div className="flex flex-row items-center gap-8 mt-4 max-sm:flex-col max-sm:items-start">
                  <CardDescription className="flex flex-row items-center gap-3">
                    <Calendar />
                    2023 - 2026 (expected)
                  </CardDescription>
                  <CardDescription className="flex flex-row items-center gap-3">
                    <LocateIcon />
                    Madagascar
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <span className="font-bold!">Relevant coursework:</span>{" "}
                  Object-Oriented Programming, Algorithms and Data Structures,
                  Database Systems, Web and Mobile Development, Cloud Computing,
                  Software Engineering, Cybersecurity, Data Analysis.
                </CardDescription>
                <div className="h-4"></div>
              </CardContent>
            </Card>
          </div>
          <div>
            <span className="flex items-center gap-4 mb-4">
              <FaUserTie className="text-3xl text-orange-400" />
              <h2 className="text-lg">Professional background</h2>
            </span>
            <Card>
              <CardHeader>
                <CardTitle>Student Seeking Internship</CardTitle>
                <CardDescription>
                  Looking for my first professional opportunity
                </CardDescription>
                <CardDescription className="flex flex-row items-center gap-3 mt-4">
                  <Clock />
                  At the earliest possible time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li>
                    Work-study position as a{" "}
                    <strong>Front-end Developer</strong> (React JS, TypeScript)
                  </li>
                  <li>
                    Schedule: <strong>22 hours per week</strong>
                  </li>
                  <li>
                    Open to <strong>remote work</strong> and{" "}
                    <strong>weekend availability</strong>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
