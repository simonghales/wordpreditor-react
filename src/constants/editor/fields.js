
export const EDITOR_TAB_MAIN = "main";
export const EDITOR_TAB_SIZE = "size";

export const EDITOR_FIELDS = {
  [EDITOR_TAB_MAIN]: {
    "label": "Main",
    "fields": [
      {
        "id": "content",
        "label": "Content",
        "type": "text",
        "style": false
      },
      {
        "id": "link",
        "label": "Link",
        "type": "text",
        "style": false
      },
      {
        "id": "backgroundcolor",
        "label": "Background Color",
        "type": "text",
        "style": true,
        "styleName": "backgroundColor"
      }
    ]
  },
  [EDITOR_TAB_SIZE]: {
    "label": "Size",
    "fields": [
      {
        "id": "height",
        "label": "Height",
        "type": "text",
        "style": true,
        "styleName": "height"
      },
      {
        "id": "width",
        "label": "Width",
        "type": "text",
        "style": true,
        "styleName": "width"
      },
      {
        "id": "margin",
        "label": "Margin",
        "type": "text",
        "style": true,
        "styleName": "margin"
      },
      {
        "id": "padding",
        "label": "Padding",
        "type": "text",
        "style": true,
        "styleName": "padding"
      }
    ]
  }
};