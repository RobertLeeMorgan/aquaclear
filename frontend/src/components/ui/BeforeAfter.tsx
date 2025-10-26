interface BeforeAfterProps {
  before: string;
  after: string;
  beforeDesc?: string;
  afterDesc?: string;
}

export default function BeforeAfter({
  before,
  after,
  beforeDesc,
  afterDesc,
}: BeforeAfterProps) {
  return (
    <div className="flex justify-center my-auto px-0 sm:px-4 ">
      <div
        className="
          diff 
          w-full 
          max-w-[480px] 
          aspect-[16/10] 
          rounded-2xl 
          overflow-hidden 
          shadow-md 
          border border-base-300 
          transition-transform 
          hover:scale-[1.01]
          hover:shadow-xl
        "
      >
        <div className="diff-item-1">
          <img
            alt={afterDesc || "After"}
            src={after}
          />
        </div>
        <div className="diff-item-2">
          <img
            alt={beforeDesc || "Before"}
            src={before}
          />
        </div>
        <div className="diff-resizer w-44 sm:w-60"></div>
      </div>
    </div>
  );
}