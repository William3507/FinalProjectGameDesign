import React from 'react';

import GamePageLayout from "@/components/Layout/GamePage";

import useDiscoFloor from "@/hooks/useDiscoFloor";

import controls from "@/data/controls";

import "@fontsource/oswald"

export default function HomePage() {

  const {
    unityProvider,
    isLoaded,
    requestFullscreen,
    unload,
  } = useDiscoFloor();

  return (
      <GamePageLayout
          unload={unload}
          isLoaded={isLoaded}
          unityProvider={unityProvider}
          requestFullscreen={requestFullscreen}
          headerText={"Skate-Bored"}
          subHeaderText={"Tron-like 3D multiplayer game"}
          controls={controls}
      />
  )
}
