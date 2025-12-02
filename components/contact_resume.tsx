import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Download } from "lucide-react";

export default function ContactResume() {
  return (
    <Card>
      <CardContent>
        <div className="text-center">
          <h4 className="mb-2">Want to check out my resume?</h4>
          <a
            href="/Miharisoa_Rakotonirina_CV.pdf"
            download={"Miharisoa_Rakotonirina_CV"}
          >
            <Button variant={"outline"} className="cursor-pointer">
              <span>
                <Download />
              </span>
              <span>Download my CV</span>
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
