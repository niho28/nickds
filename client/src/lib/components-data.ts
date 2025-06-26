export interface ComponentData {
  id: string;
  title: string;
  description: string;
  category: 'getting-started' | 'components' | 'patterns';
  tags: string[];
}

export const componentsData: ComponentData[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    description: 'Overview of the design system and its principles',
    category: 'getting-started',
    tags: ['overview', 'principles', 'getting-started']
  },
  {
    id: 'design-tokens',
    title: 'Design Tokens',
    description: 'Colors, typography, spacing, and other design tokens',
    category: 'getting-started',
    tags: ['tokens', 'colors', 'typography', 'spacing']
  },
  {
    id: 'buttons',
    title: 'Button',
    description: 'Interactive elements for triggering actions',
    category: 'components',
    tags: ['button', 'interactive', 'action', 'primary', 'secondary']
  },
  {
    id: 'inputs',
    title: 'Input',
    description: 'Form inputs for user data entry',
    category: 'components',
    tags: ['input', 'form', 'text', 'validation']
  },
  {
    id: 'cards',
    title: 'Card',
    description: 'Flexible containers for grouping content',
    category: 'components',
    tags: ['card', 'container', 'content', 'layout']
  }
];

export function searchComponents(query: string): ComponentData[] {
  if (!query.trim()) return componentsData;
  
  const lowerQuery = query.toLowerCase();
  return componentsData.filter(component =>
    component.title.toLowerCase().includes(lowerQuery) ||
    component.description.toLowerCase().includes(lowerQuery) ||
    component.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

export function getComponentsByCategory(category: ComponentData['category']): ComponentData[] {
  return componentsData.filter(component => component.category === category);
}
