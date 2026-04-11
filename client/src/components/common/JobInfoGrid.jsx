import { useFormContext } from "react-hook-form";

export default function InfoGrid({ fields, data, isEditing }) {
  const { register } = useFormContext();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {fields.map((field, index) => {
        const Icon = field.icon;

        const rawValue = data?.[field.key];

        const value =
          rawValue != null && rawValue !== ""
            ? field.format
              ? field.format(rawValue)
              : rawValue
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

            {isEditing ? (
              field.options ? (
                <select
                  {...register(field.key)}
                  className="border border-neutral-200 rounded px-2 py-1 w-full outline-none"
                >
                  {field.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  {...register(field.key)}
                  type={
                    field.type === "date"
                      ? "date"
                      : field.type === "email"
                        ? "email"
                        : field.type === "phone"
                          ? "tel"
                          : "text"
                  }
                  className="border border-neutral-200 rounded px-2 py-1 w-full outline-none"
                />
              )
            ) : (
              <p>{value}</p>
            )}
          </div>
        );
      })}
    </section>
  );
}
