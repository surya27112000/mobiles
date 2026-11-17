import { BatteryCharging, Camera, Cpu, Info, Monitor, Palette, Sparkles, Wifi } from "lucide-react";
import { colourHex } from "@/lib/colors";
import { formatPrice } from "@/data/mobiles";

function Card({ Icon, title, brandColor, children }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
      <h3 className="flex items-center gap-3 border-b border-neutral-200 px-5 py-4 text-lg font-bold text-ink">
        <span
          className="flex h-9 w-9 items-center justify-center rounded-lg"
          style={{ backgroundColor: `color-mix(in srgb, ${brandColor} 14%, white)`, color: brandColor }}
        >
          <Icon className="h-5 w-5" />
        </span>
        {title}
      </h3>
      {children}
    </section>
  );
}

function Rows({ rows }) {
  const shown = rows.filter(([, v]) => v);
  return (
    <dl>
      {shown.map(([label, value], i) => (
        <div
          key={label}
          className={`grid gap-1 px-5 py-3 text-sm sm:grid-cols-[9.5rem_1fr] sm:gap-4 ${i % 2 ? "bg-neutral-50" : ""}`}
        >
          <dt className="font-medium text-neutral-500">{label}</dt>
          <dd className="font-medium text-ink">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

// Full specification sheet, grouped like a product page.
export default function SpecSections({ brand, series, model, sheet }) {
  const isKeypad = sheet.kind === "keypad";
  const color = brand.color;

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <Card Icon={Info} title="General" brandColor={color}>
        <Rows
          rows={[
            ["Brand", brand.name],
            ["Model", model.name],
            ["Series", series.name],
            ["Type", isKeypad ? "Keypad phone" : "Smartphone"],
            ["Operating system", sheet.os],
            ["Approx. price", `${formatPrice(model.price)} (${model.spec})`],
          ]}
        />
      </Card>

      <Card Icon={Monitor} title="Display" brandColor={color}>
        <Rows rows={[["Size & type", sheet.display]]} />
      </Card>

      <Card Icon={Cpu} title={isKeypad ? "Platform & memory" : "Performance"} brandColor={color}>
        <Rows
          rows={[
            [isKeypad ? "Platform" : "Processor", sheet.processor],
            ["RAM", sheet.ram],
            ["Internal storage", sheet.storage],
            ["Memory", sheet.memory],
          ]}
        />
      </Card>

      <Card Icon={Camera} title="Camera" brandColor={color}>
        <Rows
          rows={[
            ["Rear camera", sheet.rear],
            ["Front camera", sheet.front],
          ]}
        />
      </Card>

      <Card Icon={BatteryCharging} title="Battery & charging" brandColor={color}>
        <Rows
          rows={[
            ["Battery capacity", sheet.battery],
            ["Charging", sheet.charging],
          ]}
        />
      </Card>

      <Card Icon={Wifi} title="Network & connectivity" brandColor={color}>
        <Rows
          rows={[
            ["Network", sheet.network],
            ["SIM", sheet.sim],
            ["Connectivity", sheet.connectivity],
          ]}
        />
      </Card>

      {sheet.colours.length > 0 && (
        <Card Icon={Palette} title="Available colours" brandColor={color}>
          <ul className="flex flex-wrap gap-2 p-5">
            {sheet.colours.map((name) => (
              <li
                key={name}
                className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white py-1.5 pl-2 pr-3.5 text-sm font-medium"
              >
                <span className="h-5 w-5 rounded-full border border-black/10" style={{ backgroundColor: colourHex(name, color) }} />
                {name}
              </li>
            ))}
          </ul>
        </Card>
      )}

      {sheet.features.length > 0 && (
        <Card Icon={Sparkles} title="Key features" brandColor={color}>
          <ul className="flex flex-wrap gap-2 p-5">
            {sheet.features.map((f) => (
              <li key={f} className="rounded-full bg-neutral-100 px-3.5 py-1.5 text-sm font-medium text-neutral-800">
                {f}
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
}
