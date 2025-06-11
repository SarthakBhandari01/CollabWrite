import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import templates from "./Templates";
import { useCreateDocument } from "@/hooks/apis/documents/useCreateDocument";
import { useNavigate } from "react-router-dom";

export const TemplatesGallery = () => {
  const navigate = useNavigate();
  const { isPending, createDocumentMutation } = useCreateDocument();
  async function onTemplateClick(title, initialContent) {
    try {
      const data = await createDocumentMutation({
        title,
        content: initialContent,
      });
      navigate(`/documents/${data?._id}`);
    } catch (error) {
      console.error("Error creating document:", error);
    }
  }
  return (
    <div className="bg-[#F1F3F4]">
      <div className="flex flex-col min-w-screen-xl mx-auto px-16 py-4 gap-y-4">
        <h3 className="font-medium">Start a new document</h3>
        <Carousel>
          <CarouselContent className={"-ml-4"}>
            {templates.map((template) => {
              return (
                <CarouselItem
                  key={template.id}
                  className={
                    "basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-[14.285714%] pl-4"
                  }
                >
                  <div
                    className={cn(
                      "aspect-[3/4] flex flex-col gap-y-2.5",
                      isPending && "pointer-events-none opacity-50"
                    )}
                  >
                    <button
                      disabled={isPending}
                      // TODO: Add proper initial content
                      onClick={() =>
                        onTemplateClick(template.label, template.initialContent)
                      }
                      style={{
                        backgroundImage: `url(${template.imageUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                      className="size-full hover:border-blue-500 rounded-sm border hover:bg-blue-50 transition flex flex-col items-center justify-center gap-y-4 bg-white"
                    />
                    <p className="text-sm font-medium truncate">
                      {template.label}
                    </p>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};
