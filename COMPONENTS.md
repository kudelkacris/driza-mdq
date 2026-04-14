# Component Documentation - DRIZA MDQ FRAGANCIAS

Complete reference for all components and their functionality.

## Components Overview

### 1. CartContext.js
**Purpose:** Global state management for shopping cart

**Exports:**
- `CartProvider` - Context provider component
- `useCart()` - Hook to access cart functionality

**Features:**
- Add items to cart
- Remove items from cart
- Update item quantities
- Calculate totals
- localStorage persistence
- Size variant support

**Usage:**
```jsx
import { useCart } from '@/components/CartContext';

function MyComponent() {
  const { items, addItem, removeItem, getTotalPrice } = useCart();
  // ...
}
```

---

### 2. Header.jsx
**Purpose:** Navigation header with logo and cart button

**Props:**
- `onCartClick` (function) - Callback when cart button is clicked

**Features:**
- Sticky positioning
- Brand logo display area
- Navigation links (mobile responsive)
- Cart button with item count badge
- Responsive design

**Content:**
- Logo area (displays "D" with background)
- Brand name "DRIZA MDQ FRAGANCIAS"
- Navigation links to Products and Contact
- Cart button with badge

---

### 3. Hero.jsx
**Purpose:** Welcome section with brand messaging

**Features:**
- Large branded logo (circular gradient)
- Brand name with tagline
- Description text
- Call-to-action button
- Animated gradient background effects

**Content:**
- Large "D" logo
- "DRIZA MDQ" heading
- "FRAGANCIAS" subheading
- Welcome description
- "Explorar Catálogo" (Explore Catalog) button

---

### 4. ProductCard.jsx
**Purpose:** Individual product display card

**Props:**
- `product` (object) - Product data object

**Features:**
- Product image placeholder (dark background with text)
- Product name and brand
- Product description
- Price display with ARS formatting
- Size selector (if product has sizes)
- Add to cart button with feedback
- Hover effects and animations

**Displays:**
- Product name, brand, description
- Current price (updates with size selection)
- Size dropdown (when applicable)
- Add to cart button with "Added" confirmation

---

### 5. ProductGrid.jsx
**Purpose:** Grid display of products with filtering

**Props:**
- `selectedBrand` (string) - Currently selected brand filter
- `onBrandChange` (function) - Callback for brand selection

**Features:**
- Brand filter buttons (All, Calvin Klein, Davidoff, Cuba, Cannon)
- Dynamic grid layout (responsive)
- Displays ProductCard components
- Empty state message

**Layout:**
- Title and description
- Brand filter buttons
- Responsive grid (1 col mobile, 2 col tablet, 3 col desktop)

---

### 6. Cart.jsx
**Purpose:** Shopping cart sidebar

**Props:**
- `isOpen` (boolean) - Cart open/closed state
- `onClose` (function) - Callback to close cart

**Features:**
- Slide-in sidebar from right
- Overlay background
- Item list with:
  - Product details
  - Size information
  - Quantity controls (+/- buttons)
  - Remove button
- Total price calculation
- Confirm order button (opens WhatsApp)
- Continue shopping button
- Empty cart state message

**Interactions:**
- Remove items individually
- Adjust quantities
- View total in ARS format
- Send order via WhatsApp

---

### 7. WhatsAppButton.jsx
**Purpose:** Floating WhatsApp contact button

**Features:**
- Fixed position (bottom right)
- Circular gold button
- WhatsApp icon
- Click opens WhatsApp Web with pre-formatted message
- Hover effects with scale animation

**Message Template:**
Sends: "Hola! Me interesa conocer más sobre los perfumes de DRIZA MDQ FRAGANCIAS"

---

### 8. ContactForm.jsx
**Purpose:** Contact form with WhatsApp integration

**Fields:**
- Name (required)
- Email (required, validated)
- Message (required, textarea)

**Features:**
- Form validation
- WhatsApp submission
- Success message feedback
- Loading state during submission
- Pre-formatted WhatsApp message with form data

**Submission:**
Opens WhatsApp with message containing user's name, email, and message.

---

### 9. Footer.jsx
**Purpose:** Footer with company information and links

**Sections:**
1. Brand Information
   - Logo area
   - Company description

2. Quick Links
   - Catalog
   - Contact
   - Home

3. Social Media
   - Facebook
   - Instagram
   - WhatsApp

**Additional:**
- Copyright notice
- Company location (Mar del Plata, Argentina)
- Current year (dynamic)

---

## Page Components

### app/page.js
**Purpose:** Main page component

**Structure:**
- Header (with cart toggle)
- Hero section
- Product catalog (with filtering)
- Contact section
- Cart sidebar (controlled)
- WhatsApp button
- Footer

**State Management:**
- `isCartOpen` - Controls cart sidebar
- `selectedBrand` - Controls product filter

---

### app/layout.js
**Purpose:** Root layout and metadata

**Features:**
- CartProvider wrapper (makes cart globally available)
- SEO metadata
- HTML structure
- Global styles import

**Metadata:**
- Title: "DRIZA MDQ FRAGANCIAS - Perfumes de Lujo"
- Description: Company and service description
- Keywords: Relevant search terms
- Authors: Company name

---

## Utility Files

### lib/products.js
**Exports:**
- `products` - Array of 10 product objects
- `brands` - Array of brand names
- `formatPrice(price)` - Formats numbers as ARS currency

**Product Object Structure:**
```javascript
{
  id: number,
  name: string,
  brand: string,
  price: number | null,
  sizes: null | array,
  description: string,
  image: string (path)
}
```

---

## Component Hierarchy

```
app/
├── Header
│   └── (uses useCart)
├── Hero
├── ProductGrid
│   └── ProductCard (× multiple)
│       └── (uses useCart)
├── Contact Section
│   └── ContactForm
├── Cart
│   └── (uses useCart)
├── WhatsAppButton
└── Footer
```

---

## Styling System

All components use:
- **Tailwind CSS** for layout and responsive design
- **Custom CSS classes** from globals.css
- **Inline styles** for dynamic colors
- **Dark mode colors** by default

### Common CSS Classes:
- `.gold-accent` - Gold text (#c9a84c)
- `.gold-bg` - Gold background button style
- `.card-dark` - Dark card styling
- `.transition-smooth` - Smooth transitions
- `.product-placeholder` - Product image area

---

## Hooks Used

### React Hooks
- `useState` - Local component state
- `useEffect` - Side effects (localStorage)
- `useContext` - Access cart from context

### Custom Hooks
- `useCart()` - Access global cart state

---

## Props Drilling Pattern

Most components accept minimal props. Cart state flows through:
1. CartProvider (top level)
2. Components use `useCart()` hook directly
3. No need to pass props down multiple levels

---

## Component Dependencies

```
CartContext.js
├── Header
├── ProductCard
├── Cart
└── app/page.js (provides provider)

Header
├── (independent)

Hero
├── (independent)

ProductGrid
├── ProductCard

ProductCard
├── CartContext

Cart
├── CartContext

WhatsAppButton
├── (independent)

ContactForm
├── (independent)

Footer
├── (independent)
```

---

## Responsive Breakpoints

All components use Tailwind breakpoints:
- **Mobile**: < 768px (default styles)
- **Tablet (md)**: 768px+ (tablet layout)
- **Desktop (lg)**: 1024px+ (full layout)

---

## Accessibility Features

- Semantic HTML elements
- ARIA labels on buttons
- Form labels with proper associations
- Keyboard navigation support
- Color contrast meets WCAG standards
- Proper heading hierarchy

---

## Performance Optimizations

- Client-side rendering where needed ('use client')
- Minimal re-renders with Context API
- CSS class purging in production
- No unnecessary imports
- Optimized event handlers
- localStorage for cart persistence

---

## Error Handling

- Form validation (contact form)
- Cart quantity bounds checking
- Empty state messages
- Loading states during operations

---

This documentation covers all components, their purpose, props, and usage patterns.
