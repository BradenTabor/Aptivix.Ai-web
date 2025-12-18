# Public Assets

This folder contains static assets for the Aptivix.Ai website.

## Folder Structure

```
public/
├── images/           # Image assets
│   ├── projects/     # Portfolio project images
│   ├── team/         # Team member photos
│   └── icons/        # Custom icons (if any)
├── og-image.png      # Open Graph image for social sharing (1200x630px)
├── favicon.ico       # Site favicon
└── README.md         # This file
```

## Adding Images

### Portfolio Projects
1. Add project images to `/public/images/projects/`
2. Recommended size: 1200x800px for thumbnails
3. Use descriptive filenames: `project-name.jpg`
4. Update the project data in `/lib/constants.ts`

### Team Photos
1. Add team photos to `/public/images/team/`
2. Recommended size: 400x400px (square)
3. Use format: `firstname-lastname.jpg`
4. Update team data in `/app/about/components/team-section.tsx`

### Open Graph Image
- Replace `og-image.png` with your branded image
- Size: 1200x630px
- Format: PNG or JPG

### Favicon
- Replace `favicon.ico` with your branded favicon
- Include multiple sizes for best compatibility
- Consider using a favicon generator for all required formats

## Image Optimization

Next.js automatically optimizes images when using the `<Image>` component:

```tsx
import Image from 'next/image';

<Image
  src="/images/projects/project-name.jpg"
  alt="Project description"
  width={1200}
  height={800}
  className="rounded-lg"
/>
```

For best performance:
- Use WebP or AVIF formats when possible
- Provide appropriate `width` and `height` props
- Use `priority` prop for above-the-fold images

