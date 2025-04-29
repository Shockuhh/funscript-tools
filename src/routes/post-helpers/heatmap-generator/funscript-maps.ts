export const fileMidExtensionToAxisId = new Map<string, string>([
  ['', 'L0'],
  ['surge', 'L1'],
  ['sway', 'L2'],
  ['twist', 'R0'],
  ['roll', 'R1'],
  ['pitch', 'R2'],
  ['vib', 'V0'],
  ['vavle', 'A0'],
  ['suck', 'A1'],
  ['lube', 'A2']
])

export const axisIdToFileMidExtension = new Map<string, string>([
  ['L0', ''],
  ['L1', '.surge'],
  ['L2', '.sway'],
  ['R0', '.twist'],
  ['R1', '.roll'],
  ['R2', '.pitch'],
  ['V0', '.vib'],
  ['A0', '.vavle'],
  ['A1', '.suck'],
  ['A2', '.lube']
])

export const axisIdToName = new Map<string, string>([
  ['A0', 'Valve'],
  ['A1', 'Suction'],
  ['A2', 'Lube'],
  ['L0', 'Stroke'],
  ['L1', 'Surge'],
  ['L2', 'Sway'],
  ['L3', 'Suck'],
  ['R0', 'Twist'],
  ['R1', 'Roll'],
  ['R2', 'Pitch'],
  ['V0', 'Vibrate']
])
