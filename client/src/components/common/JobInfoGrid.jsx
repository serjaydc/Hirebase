export default function InfoGrid({ fields, data }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {fields.map((field, index) => {
        const Icon = field.icon;

        const value = data?.[field.key]
          ? field.format
            ? field.format(data[field.key])
            : data[field.key]
          : "N/A";

        return (
          <div
            key={index}
            className={`border border-neutral-200 rounded-lg p-4 bg-white hover:shadow-sm transition ${
              field.span ? "col-span-full" : ""
            }`}
          >
            <div className="flex items-center gap-2 text-neutral-500 text-sm mb-2">
              {Icon && <Icon className="w-4 h-4" />}
              <p>{field.label}</p>
            </div>

            <p className="font-medium text-xl capitalize">{value}</p>
          </div>
        );
      })}
    </section>
  );
}
