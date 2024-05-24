"use client"

import React from "react";
import {
  FluentProvider,
  SSRProvider,
  RendererProvider,
  createDOMRenderer,
  renderToStyleElements,
} from '@fluentui/react-components';

import { blue } from './theme'
import { useServerInsertedHTML } from 'next/navigation';

export function Providers({ children }: {children: React.ReactNode}) {
  const [renderer] = React.useState(() => createDOMRenderer());
  const didRenderRef = React.useRef(false);
  const useDarkMode = false;

  useServerInsertedHTML(() => {
    if (didRenderRef.current) {
      return;
    }
    didRenderRef.current = true;
    return <>{renderToStyleElements(renderer)}</>;
  });

  return (
    <RendererProvider renderer={renderer}>
      <SSRProvider>
        <FluentProvider theme={blue.darkTheme}>{children}</FluentProvider>
      </SSRProvider>

    </RendererProvider>

  )
}