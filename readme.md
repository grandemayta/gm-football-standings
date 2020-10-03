# Football Standings Widget
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![made-with-javascript-doc](https://img.shields.io/badge/Made%20with-Javascript-1f425f.svg)](https://www.sphinx-doc.org/)

<img src="https://user-images.githubusercontent.com/6887120/94998705-30729580-05b4-11eb-8957-12b44d915fa5.png" />

Football Standings Widget shows the standings of the most important football leagues.
You can integrate this widget in your Web Application using NPM or using the CDN. The widget works with Angular, React and others modern frontend Frameworks or libraries.
The widget was creates using Mobile first apporach and is also customizable.

**Work in progress**

## Summary
- [Getting started](#getting-started)
- [Available competitions](#available-competitions)
- [Integration](#integration)
- [Browsers support](#browsers-support)
- [Tech stack](#tech-stack)

## Getting started
To use our widget you need to enable a public key from [football-data](https://www.football-data.org/).

## Available competitions
| Key | Competition |
| ------ | ------ |
| SA | Serie A |
| PL | Premier League |
| PD | Liga |
| BL1 | Bundesliga |
| FL1 | Ligue |
| DED | Eredivise |

## Integration
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
      .theme-red {
        --header-background: #D32F2F;
        --subheader-background: #F44336;
      }
    </style>
</head>
<body>
    <gm-football-standings class="theme-red" competition="SA" season="2019" key="public-key-here">
    </gm-football-standings>
    <script src="standing-football/bundle.js"></script>
</body>
</html>
```

## Browsers support
:white_check_mark: Chrome
<br/>
:white_check_mark: Firefox
<br/>
:white_check_mark: Safari
<br/>
:white_check_mark: Edge New Version

## Tech stack:
- WebComponents
- Typescript
- StencilJS
- Sass
- Css Variables

Keep calm and code!
<br>
[![Open Source Love](https://badges.frapsoft.com/os/v3/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)