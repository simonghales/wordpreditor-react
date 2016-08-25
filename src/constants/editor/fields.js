
export const EDITOR_TAB_MAIN = "main";
export const EDITOR_TAB_SIZE = "size";
export const EDITOR_TAB_STYLING = "styling";
export const EDITOR_TAB_SPACING = "spacing";
export const EDITOR_TAB_LAYOUT = "layout";
export const EDITOR_TAB_CUSTOM = "custom";

export const EDITOR_FIELD_SHARED_STYLES = "sharedstyles";
export const EDITOR_FIELD_SHARED_CONTENT = "content";
export const EDITOR_FIELD_SHARED_LINK = "link";
export const EDITOR_FIELD_SHARED_HEIGHT = "height";
export const EDITOR_FIELD_SHARED_WIDTH = "width";
export const EDITOR_FIELD_SHARED_COLOR = "color";
export const EDITOR_FIELD_SHARED_BACKGROUND_COLOR = "backgroundcolor";
export const EDITOR_FIELD_SHARED_BORDER = "border";
export const EDITOR_FIELD_SHARED_BORDER_RADIUS = "borderradius";
export const EDITOR_FIELD_SHARED_SHADOW = "shadow";
export const EDITOR_FIELD_SHARED_PADDING = "padding";
export const EDITOR_FIELD_SHARED_MARGIN = "margin";
export const EDITOR_FIELD_SHARED_LAYOUT = "layout";
export const EDITOR_FIELD_SHARED_CUSTOM = "custom";

export const EDITOR_FIELDS = {
  [EDITOR_TAB_MAIN]: {
    "id": EDITOR_TAB_MAIN,
    "label": "Main",
    "mainField": true,
    "fields": [
      {
        "id": EDITOR_FIELD_SHARED_STYLES,
        "label": "Shared Styles",
        "type": "sharedstyles",
        "style": false
      },
      {
        "id": EDITOR_FIELD_SHARED_CONTENT,
        "label": "Content",
        "type": "text",
        "style": false
      },
      {
        "id": EDITOR_FIELD_SHARED_LINK,
        "label": "Link",
        "type": "text",
        "style": false
      }
    ]
  },
  [EDITOR_TAB_SIZE]: {
    "id": EDITOR_TAB_SIZE,
    "label": "Size",
    "mainField": true,
    "fields": [
      {
        "id": EDITOR_FIELD_SHARED_HEIGHT,
        "label": "Height",
        "type": "text",
        "style": true,
        "styleName": "height"
      },
      {
        "id": EDITOR_FIELD_SHARED_WIDTH,
        "label": "Width",
        "type": "text",
        "style": true,
        "styleName": "width"
      }
    ]
  },
  [EDITOR_TAB_STYLING]: {
    "id": EDITOR_TAB_STYLING,
    "label": "Styling",
    "mainField": true,
    "fields": [
      {
        "id": EDITOR_FIELD_SHARED_COLOR,
        "label": "Text Color",
        "type": "text",
        "style": true,
        "styleName": "color"
      },
      {
        "id": EDITOR_FIELD_SHARED_BACKGROUND_COLOR,
        "label": "Background Color",
        "type": "text",
        "style": true,
        "styleName": "backgroundColor"
      },
      {
        "id": EDITOR_FIELD_SHARED_BORDER,
        "label": "Border",
        "type": "text",
        "style": true,
        "styleName": "border"
      },
      {
        "id": EDITOR_FIELD_SHARED_BORDER_RADIUS,
        "label": "Border Radius",
        "type": "text",
        "style": true,
        "styleName": "borderRadius"
      },
      {
        "id": EDITOR_FIELD_SHARED_SHADOW,
        "label": "Shadow",
        "type": "text",
        "style": true,
        "styleName": "boxShadow"
      }
    ]
  },
  [EDITOR_TAB_SPACING]: {
    "id": EDITOR_TAB_SPACING,
    "label": "Spacing",
    "mainField": true,
    "fields": [
      {
        "id": EDITOR_FIELD_SHARED_PADDING,
        "label": "Padding",
        "type": "text",
        "style": true,
        "styleName": "padding"
      },
      {
        "id": EDITOR_FIELD_SHARED_MARGIN,
        "label": "Margin",
        "type": "text",
        "style": true,
        "styleName": "margin"
      }
    ]
  },
  [EDITOR_TAB_LAYOUT]: {
    "id": EDITOR_TAB_LAYOUT,
    "label": "Layout",
    "mainField": true,
    "fields": [
      {
        "id": EDITOR_FIELD_SHARED_LAYOUT,
        "label": "Layout",
        "type": "text",
        "style": false
      }
    ]
  },
  [EDITOR_TAB_CUSTOM]: {
    "id": EDITOR_TAB_CUSTOM,
    "label": "Custom",
    "mainField": false,
    "fields": [
      {
        "id": EDITOR_FIELD_SHARED_CUSTOM,
        "label": "Custom",
        "type": "text",
        "style": true,
        "styleName": "custom"
      }
    ]
  }
};