import { useCurrentFrame, useVideoConfig, spring, interpolate, Sequence, Easing } from "remotion";

export const CoffeePromo = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Background subtle rotation/gradient
  const bgGrad = interpolate(frame, [0, 450], [135, 175]);

  return (
    <div style={{
      flex: 1,
      background: `linear-gradient(${bgGrad}deg, #1a120b 0%, #2c1810 100%)`,
      fontFamily: "system-ui, sans-serif",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      position: "relative"
    }}>
      {/* Scene 1: Hook - Cinematic Coffee Cup Entrance */}
      <Sequence from={0} durationInFrames={150}>
        <SceneOne />
      </Sequence>

      {/* Scene 2: Build - Good Morning Message */}
      <Sequence from={150} durationInFrames={150}>
        <SceneTwo />
      </Sequence>

      {/* Scene 3: Payoff - Logo / Brand */}
      <Sequence from={300} durationInFrames={150}>
        <SceneThree />
      </Sequence>
    </div>
  );
};

const SceneOne = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pop = spring({ frame, fps, config: { damping: 12, stiffness: 100 } });
  const scale = interpolate(pop, [0, 1], [0.5, 1]);
  const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      opacity,
      transform: `scale(${scale})`
    }}>
      <h1 style={{ color: "#ffecb3", fontSize: "70px", fontWeight: 700, marginBottom: "40px", letterSpacing: "-1px" }}>
        Wake Up to Perfection
      </h1>
      <div style={{ position: "relative", width: "220px", height: "160px", background: "#f5f5f5", borderRadius: "0 0 90px 90px", boxShadow: "0 20px 40px rgba(0,0,0,0.6)" }}>
        <div style={{ position: "absolute", right: "-45px", top: "30px", width: "55px", height: "80px", border: "12px solid #f5f5f5", borderLeft: "none", borderRadius: "0 50px 50px 0" }}></div>
        <div style={{ position: "absolute", top: "15px", left: "15px", right: "15px", height: "35px", background: "#3e2723", borderRadius: "50%" }}></div>
      </div>
    </div>
  );
};

const SceneTwo = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const textSpring = spring({ frame, fps, config: { damping: 15 } });
  const translateY = interpolate(textSpring, [0, 1], [50, 0]);
  const opacity = interpolate(textSpring, [0, 1], [0, 1]);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      opacity,
      transform: `translateY(${translateY}px)`
    }}>
      <h2 style={{ color: "#d7ccc8", fontSize: "60px", fontWeight: 500, textAlign: "center", lineHeight: 1.4 }}>
        Brewed fresh.<br />
        <span style={{ color: "#ffb74d", fontWeight: 700 }}>Crafted with passion.</span>
      </h2>
    </div>
  );
};

const SceneThree = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ frame, fps, config: { damping: 10 } });
  const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      opacity,
      transform: `scale(${scale})`
    }}>
      <div style={{ fontSize: "50px", color: "#a1887f", marginBottom: "15px", letterSpacing: "2px" }}>ENJOY YOUR DAY</div>
      <h1 style={{ color: "#ffecb3", fontSize: "90px", fontWeight: 800 }}>COFFEE MOMENTS</h1>
    </div>
  );
};
