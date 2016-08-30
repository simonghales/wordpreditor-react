
import * as types             from './types'

export const EDITOR_TAB_MAIN = "main";
export const EDITOR_TAB_STYLING = "styling";
export const EDITOR_TAB_SPACING = "spacing";
export const EDITOR_TAB_LAYOUT = "layout";
export const EDITOR_TAB_CUSTOM = "custom";

export const EDITOR_FIELD_SHARED_STYLES = "sharedstyles";
export const EDITOR_FIELD_CONTENT = "content";
export const EDITOR_FIELD_LINK = "link";
export const EDITOR_FIELD_SIZE = "size";
export const EDITOR_FIELD_COLOR = "color";
export const EDITOR_FIELD_BORDER = "border";
export const EDITOR_FIELD_BORDER_RADIUS = "borderradius";
export const EDITOR_FIELD_SHADOW = "shadow";
export const EDITOR_FIELD_PADDING = "padding";
export const EDITOR_FIELD_MARGIN = "margin";
export const EDITOR_FIELD_LAYOUT = "layout";
export const EDITOR_FIELD_CUSTOM_CLASSES = "customclasses";

export const EDITOR_FIELDS = {
  [EDITOR_TAB_MAIN]: {
    "id": EDITOR_TAB_MAIN,
    "label": "Main",
    "mainField": true,
    "fields": [
      {
        "id": EDITOR_FIELD_SHARED_STYLES,
        "label": "Shared Styles",
        "type": types.FIELD_SHARED_STYLES
      },
      {
        "id": EDITOR_FIELD_CONTENT,
        "label": "Content",
        "type": types.FIELD_TEXT
      },
      {
        "id": EDITOR_FIELD_LINK,
        "label": "Link",
        "type": types.FIELD_LINK
      }
    ]
  },
  [EDITOR_TAB_STYLING]: {
    "id": EDITOR_TAB_STYLING,
    "label": "Styling",
    "mainField": true,
    "fields": [
      {
        "id": EDITOR_FIELD_COLOR,
        "label": "Color",
        "type": types.FIELD_COLOR
      },
      {
        "id": EDITOR_FIELD_BORDER,
        "label": "Border",
        "type": types.FIELD_BORDER
      },
      {
        "id": EDITOR_FIELD_BORDER_RADIUS,
        "label": "Border Radius",
        "type": types.FIELD_BORDER_RADIUS
      },
      {
        "id": EDITOR_FIELD_SHADOW,
        "label": "Shadow",
        "type": types.FIELD_SHADOW
      }
    ]
  },
  [EDITOR_TAB_SPACING]: {
    "id": EDITOR_TAB_SPACING,
    "label": "Spacing",
    "mainField": true,
    "fields": [
      {
        "id": EDITOR_FIELD_SIZE,
        "label": "Size",
        "type": types.FIELD_SIZE
      },
      {
        "id": EDITOR_FIELD_PADDING,
        "label": "Padding",
        "type": types.FIELD_PADDING
      },
      {
        "id": EDITOR_FIELD_MARGIN,
        "label": "Margin",
        "type": types.FIELD_MARGIN
      }
    ]
  },
  [EDITOR_TAB_LAYOUT]: {
    "id": EDITOR_TAB_LAYOUT,
    "label": "Layout",
    "mainField": true,
    "fields": [
      {
        "id": EDITOR_FIELD_LAYOUT,
        "label": "Layout",
        "type": types.FIELD_TEXT
      }
    ]
  },
  [EDITOR_TAB_CUSTOM]: {
    "id": EDITOR_TAB_CUSTOM,
    "label": "Custom",
    "mainField": true,
    "fields": [
      {
        "id": EDITOR_FIELD_CUSTOM_CLASSES,
        "label": "Classes",
        "type": types.FIELD_TEXT
      }
    ]
  }
};