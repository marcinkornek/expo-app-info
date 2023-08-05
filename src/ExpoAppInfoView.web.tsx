import * as React from 'react';

import { ExpoAppInfoViewProps } from './ExpoAppInfo.types';

export default function ExpoAppInfoView(props: ExpoAppInfoViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
