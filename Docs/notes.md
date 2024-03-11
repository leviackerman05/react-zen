# Package.Json
- package.json is a config for npm

- there are 2 types of dependencies we can install
- once is dev depedency and one is normal
- dev dependency-> it is generally required in development phase
- normal dependency -> required in prod also
caret and tilde in package.json

- package-lock json file keeps a record (exact version) of all the dependencies which are installed while package json keeps an average record of the versions installed for each dependency

# Parcel (Imp. for system design interview)
- Dev Build
- Host on a local server
- HMR -> Hot Module Replacement
- File Watching Algorithm which is written in C++
- Caching for Faster Builds
- Image Optimisation
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling -> Support older browsers
- Diagnostics (better looking errors)
- Error Handling
- HTTPs
- Tree Shaking (removed unused code)
-  Different dev and prod bundles