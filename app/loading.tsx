import { GearIcon } from "./components/portfolio-ui";

export default function Loading() {
  return (
    <main className="route-loading" role="status" aria-live="polite">
      <div className="loader-gear-train" aria-hidden="true">
        <GearIcon className="loader-gear main" />
        <GearIcon className="loader-gear branch-a" />
        <GearIcon className="loader-gear branch-b" />
        <GearIcon className="loader-gear child-a" />
        <GearIcon className="loader-gear child-b" />
        <GearIcon className="loader-gear child-c" />
      </div>
      <p className="route-loading-label">Calibrating Clockwork...</p>
      <span className="sr-only">Loading next page</span>
    </main>
  );
}
