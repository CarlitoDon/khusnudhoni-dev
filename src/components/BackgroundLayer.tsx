type BackgroundLayerProps = {
  showSecondaryOrb?: boolean;
};

export function BackgroundLayer({
  showSecondaryOrb = true,
}: BackgroundLayerProps) {
  return (
    <>
      <div className="data-bg pointer-events-none" />
      <div className="glow-orb glow-orb-1" />
      {showSecondaryOrb ? <div className="glow-orb glow-orb-2" /> : null}
    </>
  );
}
