A simple Vite project starter, meant to be used as a baseline for the Highbeam frontend interview.

![image](https://github.com/highbeamco/frontend-interview-template/assets/7625040/90ab3aad-920d-4b55-87fb-b1a9a3067143)


### Getting started

```zsh
# Clone the repo
git clone git@github.com:highbeamco/frontend-interview-template.git
cd frontend-interview-template

# Install yarn if you don't have it
# npm install --global yarn

# Install the project dependencies
yarn install

# Start the development server
yarn dev

# Optionally start storybook in a sparate terminal window
yarn storybook

```

### Structure

```sh
> tree --dirsfirst -L 2 src/

src/
├── api
│   ├── mock-data          # This contains mock data that is returned by the `mock-requests`
│   ├── mock-requests      # Take a look at this directory to perform requests for the interview
│   └── reps               # Defines the shape of the data returned by the `mock-requests`
├── app
│   ├── home               # Home page directory
│   └── index.tsx
├── assets
│   └── fonts
├── declarations
│   ├── svgr.d.ts
│   └── vite-env.d.ts
├── styles
│   ├── _colors.scss
│   ├── _shadows.scss
│   ├── colors.ts
│   └── index.scss
├── ui                     # Reusable UI components, feel free to add more here
│   ├── AccountDisplay
│   ├── AccountIcon
│   ├── AnimatedSpinner
│   ├── Button
│   ├── HighlightCard
│   ├── HighlightCardItem
│   └── Shimmer
├── utils                  # Reusable utility functions
│   ├── money
│   └── sleep.ts
└── index.tsx

```
