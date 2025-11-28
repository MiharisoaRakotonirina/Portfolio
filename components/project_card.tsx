import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";

export type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  isFeatured?: boolean;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  images,
  isFeatured,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden max-w-md pt-0">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-square w-full bg-muted">
                <Image
                  src={image}
                  alt={`${title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>

      <CardHeader>
        <CardTitle className="flex flex-row items-center justify-between">
          <span className="text-xl">{title}</span>
          <div className="flex flex-row gap-4">
            <span>
              {isFeatured && <Badge variant={"outline"}>Featured</Badge>}
            </span>
            <span>
              {isFeatured && (
                <Link
                  href={"https://github.com/TsioryR98/Ticket_Place_Management"}
                  target="_blank"
                >
                  <Github size={20} />
                </Link>
              )}
            </span>
          </div>
        </CardTitle>
        <CardDescription className="text-sm line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
