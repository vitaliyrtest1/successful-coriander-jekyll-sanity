export default {
    "type": "document",
    "name": "config",
    "title": "Site configuration",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "Site title",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "baseurl",
            "title": "Base URL",
            "description": "Serve the website from the given base URL",
            "hidden": true,
            "validation": null
        },
        {
            "type": "string",
            "name": "permalink",
            "title": "Permalink",
            "description": "The output path for your pages, posts, or collections.",
            "hidden": false,
            "initialValue": "/posts/:slug:output_ext",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "/posts/:slug:output_ext"
                ]
            }
        },
        {
            "type": "string",
            "name": "description",
            "title": "Site description",
            "description": "The default site description used in meta data",
            "validation": null
        },
        {
            "type": "string",
            "name": "layout",
            "title": "Layout",
            "description": "The layout of the site",
            "initialValue": "full-width",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "full-width",
                    "boxed"
                ]
            }
        },
        {
            "type": "string",
            "name": "style",
            "title": "Style",
            "description": "The style of the site",
            "initialValue": "classic",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "minimal",
                    "classic",
                    "bold"
                ]
            }
        },
        {
            "type": "string",
            "name": "palette",
            "title": "Palette",
            "description": "The palette of the site",
            "initialValue": "blue",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "blue",
                    "green",
                    "red",
                    "gray"
                ]
            }
        },
        {
            "type": "string",
            "name": "mode",
            "title": "Mode",
            "description": "The color scheme of the site",
            "initialValue": "dark",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "light",
                    "dark"
                ]
            }
        },
        {
            "type": "string",
            "name": "base_font",
            "title": "Font",
            "initialValue": "sans-serif",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "sans-serif",
                    "serif"
                ]
            }
        },
        {
            "type": "header",
            "name": "header",
            "title": "Header configuration",
            "validation": null
        },
        {
            "type": "footer",
            "name": "footer",
            "title": "Footer configuration",
            "validation": null
        },
        {
            "type": "object",
            "name": "sass",
            "title": "Sass",
            "hidden": true,
            "validation": null,
            "fields": [
                {
                    "type": "number",
                    "name": "indentWidth",
                    "title": "Indent Width",
                    "description": "Used to determine the number of spaces or tabs to be used for indentation.",
                    "initialValue": 4,
                    "validation": Rule => Rule.integer()
                },
                {
                    "type": "string",
                    "name": "style",
                    "title": "Output Style",
                    "description": "Determines the output format of the final CSS style.",
                    "initialValue": "nested",
                    "validation": null,
                    "options": {
                        "list": [
                            "nested",
                            "expanded",
                            "compact",
                            "compressed"
                        ]
                    }
                },
                {
                    "type": "number",
                    "name": "precision",
                    "title": "Precision",
                    "description": "Used to determine how many digits after the decimal will be allowed.",
                    "initialValue": 10,
                    "validation": Rule => Rule.integer()
                }
            ]
        },
        {
            "type": "array",
            "name": "plugins",
            "title": "Plugins",
            "hidden": true,
            "validation": null,
            "of": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "type": "array",
            "name": "exclude",
            "title": "Exclude",
            "description": "Exclude directories and/or files from the conversion.",
            "hidden": true,
            "validation": null,
            "of": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Config File Path",
            "description": "The file path of the configuration file",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "_config.yml"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "config"
                ]
            }
        }
    ],
    "singleInstance": true,
    "preview": {
        "select": {
            "title": "title"
        }
    }
}