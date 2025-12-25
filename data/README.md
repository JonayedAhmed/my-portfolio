# Portfolio Data Structure

This folder contains all the data for the portfolio site in a clean, centralized location.

## Files

### `index.js`
Main data file containing:
- **personal** - Name, title, contact info, summary
- **socialLinks** - GitHub, LinkedIn, Email with icons
- **education** - Degrees, institutions, publications
- **experience** - Work history with responsibilities and projects
- **testimonials** - Client/colleague testimonials
- **technologies** - Tech stack organized by category with icons
- **languages** - Spoken languages

### `projects.js`
Comprehensive project data containing:
- **Basic info** - Title, description, technologies, links
- **Featured flag** - Controls which projects appear on homepage
- **Detail page flag** - Controls which projects have full detail pages
- **Detailed content** - For projects with detail pages:
  - Overview and metadata
  - Full tech stack breakdown
  - Feature descriptions with highlights
  - Architecture and design patterns
  - Technical challenges and solutions
  - Business impact and statistics
  - Learnings and skills demonstrated
  - Future enhancements
  - Resume bullets for PDF export

## Usage

Import from the data folder in your components:

```javascript
// Named imports from index.js
import { personal, socialLinks, experience, education, technologies, testimonials } from '../../../data';

// Import projects separately
import { projects } from '../../../data/projects';

// Filter for featured projects
const featuredProjects = projects.filter(p => p.featured);

// Get projects with detail pages
const detailedProjects = projects.filter(p => p.hasDetailPage);

// Find a specific project by ID
const project = projects.find(p => p.id === 'sufia-roots-ecommerce');
```

## Adding New Projects

To add a new project:

1. Open `data/projects.js`
2. Add a new object to the `projects` array
3. Set `featured: true` to show on homepage
4. Set `hasDetailPage: true` if you want a full detail page
5. Fill in the required fields:
   - `id` - Unique identifier (used in URL)
   - `title` - Project name
   - `shortDescription` - Brief description for cards
   - `technologies` - Array of tech used
   - `githubUrl` - Link to repository
   - `demoUrl` - Link to live demo (optional)

For projects with detail pages, also add:
- `overview` - Long form description
- `metadata` - Type, role, status, timeline
- `techStack` - Detailed breakdown (frontend/backend)
- `features` - Array of feature objects with highlights
- `architecture` - Design patterns used
- `challenges` - Problems solved
- `impact` - Business results
- `statistics` - Project metrics
- `futureEnhancements` - Planned features
- `learnings` - Skills gained
- `resumeBullets` - For resume PDF export

## Benefits of This Structure

✅ **No redundancy** - Each piece of data exists in one place  
✅ **Easy to maintain** - Update data without touching components  
✅ **Clear organization** - Separate concerns (data vs. presentation)  
✅ **Reusable** - Same data used across homepage, detail pages, and resume  
✅ **Scalable** - Easy to add new projects or data fields  
✅ **Type-safe ready** - Can easily add TypeScript types later
