export class DefaultConfig {
    /**
     * Variables de configuración de la aplicación
     */
    static DEFAULT_CONFIG_APP = {
        DEFAULT_NUMBERRECORDS: 10,
        DEFAULT_SHOWPAGE: 5,
        DEFAULT_PAGE: 1,
        DefaultTimerMessage: 6000,
        DefaultTimerToast: 6000,

        DefaultConfirmButtonColor: '#7ad400',
        DefaultCancelButtonColor: '#a1a1a5',
        DefaultDate: 'M/d/yyyy',
        DefaultDateTime: 'M/d/yyyy HH:mm:ss',

        DefaultActiveDelete: true,

        Icon: {
            Create: 'save',
            Update: 'edit',
            Delete: 'trash-alt',
            Cancel: 'times',
            View: 'eye',
            TitleHead: 'list-ul',

            Check: 'check-circle',
            UnCheck: 'times-circle'
        }
    };

    /**
     * Configuaración del componente de Sumernote
     */
    static DEFAULT_SUMMERNOTE_CONFIG = {
        lang: 'es-ES',
        toolbar: [
            ['para', ['style', 'ul', 'ol', 'paragraph']],
            ['fontStyle', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript']],
            ['font', ['fontname', 'fontsize', 'color', 'height']],
            ['insert', ['link', 'picture', 'video', 'table', 'hr']],
            ['view', ['clear', 'undo', 'redo', 'codeview', 'fullscreen']]
        ]
    };

    /**
     * Expresiones regulares para validaciones de campos
     */
    static PatternValidation = {
        Url: '/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/',
        Email: '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
    };
}
