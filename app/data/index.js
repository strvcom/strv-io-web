const repos = [
  {
    name: 'atlas.js',
    html_url: 'https://github.com/strvcom/atlas.js',
    description:
      'An awesome component-based Node.js framework for all kinds of use cases.',
    category: 'back-end',
    owner: 'strvcom',
  },
  {
    name: 'eslint-config-javascript',
    html_url: 'https://github.com/strvcom/eslint-config-javascript',
    description: 'Write bulletproof JavaScript like a pro!',
    category: 'back-end',
    owner: 'strvcom',
  },
  {
    name: 'nodestream',
    html_url: 'https://github.com/nodestream/nodestream',
    description:
      'Storage-agnostic streaming library for binary data transfers.',
    category: 'back-end',
    owner: 'nodestream',
  },
  {
    name: 'semantic-merge',
    html_url: 'https://github.com/Dreamscapes/semantic-merge',
    description: 'A merging utility that is self-descriptive and makes sense.',
    category: 'back-end',
    owner: 'Dreamscapes',
  },
  {
    name: 'local-scope',
    html_url: 'https://github.com/Dreamscapes/local-scope',
    description:
      'ES 2015 way of making private properties in class-based programming.',
    category: 'back-end',
    owner: 'Dreamscapes',
  },
  {
    name: 'immutable-custom-merge',
    html_url: 'https://github.com/ruzicka/immutable-custom-merge',
    description:
      'Allows deep merging of Immutable objects with custom per-property merging strategy.',
    category: 'back-end',
    owner: 'ruzicka',
  },
  {
    name: 'to-json-schema',
    html_url: 'https://github.com/ruzicka/to-json-schema',
    description: 'Converts JS objects to JSON Schema.',
    category: 'back-end',
    owner: 'ruzicka',
  },
  {
    name: 'koogn',
    html_url: 'https://github.com/ruzicka/koogn',
    description: 'Validate JS objects just by example, not schema.',
    category: 'back-end',
    owner: 'ruzicka',
  },
  {
    name: 'Android-Templates-And-Utilities',
    html_url: 'https://github.com/petrnohejl/Android-Templates-And-Utilities',
    description:
      'Collection of source codes, utilities, templates and snippets for Android development.',
    category: 'android',
    owner: 'petrnohejl',
  },
  {
    name: 'Alfonz',
    html_url: 'https://github.com/petrnohejl/Alfonz',
    description:
      'Mr. Alfonz is here to help you build your Android app, make the development process easier and avoid boilerplate code.',
    category: 'android',
    owner: 'petrnohejl',
  },
  {
    name: 'HELU-Utils',
    html_url: 'https://github.com/Tuxilero/HELU-Utils',
    description: '',
    category: 'android',
    owner: 'tuxilero',
  },
  {
    name: 'LineCounter-Plugin',
    html_url: 'https://github.com/Tuxilero/LineCounter-Plugin',
    description: 'Counting lines in java files',
    category: 'android',
    owner: 'tuxilero',
  },
  {
    name: 'android-keystore-compat',
    html_url:
      'https://github.com/kotomisak/security-showcase-android/tree/develop/android-keystore-compat',
    description:
      'Sample application pointing some security related practices on Android device.',
    category: 'android',
    owner: 'kotomisak',
  },
  {
    name: 'valifi',
    html_url: 'https://github.com/mlykotom/valifi',
    description:
      'Android library for validation forms and inputs based on data binding.',
    category: 'android',
    owner: 'mlykotom',
  },
  {
    name: 'Android-ViewModelBinding',
    html_url: 'https://github.com/jakubkinst/Android-ViewModelBinding',
    description:
      'A lightweight library aiming to speed up Android app development by leveraging the new Android Data Binding together with the Model-View-ViewModel design pattern.',
    category: 'android',
    owner: 'jakubkinst',
  },
  {
    name: 'dundee',
    html_url: 'https://github.com/strvcom/dundee',
    description: 'Android App Architecture Showcase',
    category: 'android',
    owner: 'strvcom',
  },
  {
    name: 'Android-StatefulLayout',
    html_url: 'https://github.com/jakubkinst/Android-StatefulLayout',
    description:
      'A custom Android ViewGroup to display different states of screen (CONTENT, PROGRESS, OFFLINE, EMPTY, etc.)',
    category: 'android',
    owner: 'jakubkinst',
  },
  {
    name: 'Android-LongTouch',
    html_url: 'https://github.com/jakubkinst/Android-LongTouch',
    description: '',
    category: 'android',
    owner: 'jakubkinst',
  },
  {
    name: 'DCTableViewController',
    html_url: 'https://github.com/DanielCech/DCTableViewController',
    description: 'Convenience wrapper for table views in controllers',
    category: 'ios',
    owner: 'DanielCech',
  },
  {
    name: 'matchJSON',
    html_url: 'https://github.com/DanielCech/matchJSON',
    description: 'Command line tool for JSON structure comparison',
    category: 'ios',
    owner: 'DanielCech',
  },
  {
    name: 'localizenib-ios',
    html_url: 'https://github.com/strvcom/localizenib-ios',
    description: 'Simple localization of storyboards and xib files',
    category: 'ios',
    owner: 'strvcom',
  },
  {
    name: 'LCDKeypad',
    html_url: 'https://github.com/dzindra/LCDKeypad',
    description: 'LCDKeypad Arduino library',
    category: 'iot',
    owner: 'dzindra',
  },
  {
    name: 'ch34x-osx-installer',
    html_url: 'https://github.com/dzindra/ch34x-osx-installer',
    description: 'Repackaged installer of CH34x driver',
    category: 'iot',
    owner: 'dzindra',
  },
  {
    name: 'toycar',
    html_url: 'https://github.com/dzindra/toycar',
    description: 'WiFi controlled toy car',
    category: 'iot',
    owner: 'dzindra',
  },
  {
    name: 'letsmake-ledmatrix',
    html_url: 'https://github.com/TheCaveCz/letsmake-ledmatrix',
    description: 'Simple LED matrix driven by MAX7219 and Arduino Nano',
    category: 'iot',
    owner: 'TheCaveCz',
  },
  {
    name: 'letsmake-wifilamp',
    html_url: 'https://github.com/TheCaveCz/letsmake-wifilamp',
    description:
      'WiFi controllable WS2812b LED strip in Ikea Storuman enclosure',
    category: 'iot',
    owner: 'TheCaveCz',
  },
]

export default repos
