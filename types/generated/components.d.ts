import type { Schema, Struct } from '@strapi/strapi';

export interface BlogCallout extends Struct.ComponentSchema {
  collectionName: 'components_blog_callouts';
  info: {
    description: 'Callout box for tips, warnings, or important information';
    displayName: 'Callout';
    icon: 'exclamation-circle';
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    type: Schema.Attribute.Enumeration<['info', 'tip', 'warning', 'danger']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'info'>;
  };
}

export interface BlogCardGrid extends Struct.ComponentSchema {
  collectionName: 'components_blog_card_grids';
  info: {
    displayName: 'Card Grid';
    icon: 'th-large';
  };
  attributes: {
    cards: Schema.Attribute.Component<'blog.card-item', true>;
    columns: Schema.Attribute.Enumeration<['2', '3']> &
      Schema.Attribute.DefaultTo<'2'>;
  };
}

export interface BlogCardItem extends Struct.ComponentSchema {
  collectionName: 'components_blog_card_items';
  info: {
    displayName: 'Card Item';
    icon: 'square';
  };
  attributes: {
    content: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    items: Schema.Attribute.JSON;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlogCtaBox extends Struct.ComponentSchema {
  collectionName: 'components_blog_cta_boxes';
  info: {
    displayName: 'CTA Box';
    icon: 'bullhorn';
  };
  attributes: {
    description: Schema.Attribute.Text;
    primaryButtonText: Schema.Attribute.String;
    primaryButtonUrl: Schema.Attribute.String;
    secondaryButtonText: Schema.Attribute.String;
    secondaryButtonUrl: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlogImage extends Struct.ComponentSchema {
  collectionName: 'components_blog_images';
  info: {
    description: 'Image block with caption';
    displayName: 'Image';
    icon: 'image';
  };
  attributes: {
    alt: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    caption: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface BlogQuote extends Struct.ComponentSchema {
  collectionName: 'components_blog_quotes';
  info: {
    description: 'Quote block with author attribution';
    displayName: 'Quote';
    icon: 'quote-right';
  };
  attributes: {
    author: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    source: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
  };
}

export interface BlogRichText extends Struct.ComponentSchema {
  collectionName: 'components_blog_rich_texts';
  info: {
    description: 'Rich text content block';
    displayName: 'Rich Text';
    icon: 'align-left';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'SEO metadata for pages';
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaKeywords: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog.callout': BlogCallout;
      'blog.card-grid': BlogCardGrid;
      'blog.card-item': BlogCardItem;
      'blog.cta-box': BlogCtaBox;
      'blog.image': BlogImage;
      'blog.quote': BlogQuote;
      'blog.rich-text': BlogRichText;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
