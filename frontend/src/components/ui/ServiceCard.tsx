import SEOlink from "./SEOLink";

interface CardProps {
  title: string;
  imgDescription: string;
  imgUrl: string;
  description: string;
  route: string
}

export default function ServiceCard(
  { title, imgDescription, imgUrl, description, route }: CardProps
) {
  return (
    <div key={title} className="card bg-base-200 shadow-md hover:shadow-xl transition max-w-[300px]">
              <figure>
                <img src={imgUrl} alt={imgDescription} className="h-40 w-full object-cover" />
              </figure>
              <div className="card-body px-4 sm:px-8 py-6">
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm text-base-content/80">{description}</p>
                <div className="card-actions justify-end">
                  <SEOlink to={route} label={title} className="btn btn-sm btn-outline btn-primary mt-2">
                    Learn More
                  </SEOlink>
                </div>
              </div>
            </div>
  );
}
