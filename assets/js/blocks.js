( function( wp ) {
    const noteHtml = wp.element.RawHTML( {
        children: '<strong>&#9889; Важное замечание &#9889;</strong>'
    } );

    wp.blocks.registerBlockType( 'otfm-html/block-note', {
        title: 'Важное замечание',
        description: 'Заголовок: Важное замечание',
        icon: 'warning',    // dashicons
        category: 'layout', // category of the block
        keywords: [ // search sinonime block
            'Важное замечание',
            'otfm'
        ],
        supports: {
            // выравивания
            align: [ 'left', 'center' ]
        },

        edit: function() {
            return noteHtml;
        },

        save: function() {
            return noteHtml;
        }
    } ); // END registerBlockType

// 2

    const lifeHtml = wp.element.RawHTML( {
        children: '<strong>&#128161; Лайфхак &#128161;</strong>'
    } );

    wp.blocks.registerBlockType( 'otfm-html/block-life', {
        title: 'Лайфхак',
        description: 'Заголовок: Лайфхак',
        icon: 'lightbulb',
        category: 'layout',
        keywords: [
            'Лайфхак',
            'otfm'
        ],
        supports: {
            align: [ 'left', 'center' ]
        },

        edit: function() {
            return lifeHtml;
        },

        save: function() {
            return lifeHtml;
        }
    } );

// 3

    const hrHtml = wp.element.RawHTML( {
        children: '<hr class="w_80">'
    } );

    const iconLine = wp.element.createElement( 'svg', {
        width: 24,
        height: 24
    },
        wp.element.createElement( 'path', {
            fill: "none",
            d: "M0 0h24v24H0V0z"
        } ),
        wp.element.createElement( 'path', {
            d: "M19 13H5v-2h14v2z"
        } )
        );

    wp.blocks.registerBlockType( 'otfm-html/block-hr', {
        title: 'hr 80',
        description: 'Разделитель на 80%',
        icon: iconLine,  // svg
        category: 'layout',
        keywords: [
            'hr 80',
            'separator',
            'разделитель',
            'otfm'
        ],

        edit: function() {
            return hrHtml;
        },

        save: function() {
            return hrHtml;
        }
    } );

// 4

    const tubeHtml = wp.element.RawHTML( {
        children: '<a class="otfm-tube" href="https://www.youtube.com/c/OtshelnikFm" rel="noopener noreferrer noindex nofollow" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg><span>YouTube: Подписаться на мой канал</span></a>'
    } );

    wp.blocks.registerBlockType( 'otfm-html/block-tube', {
        title: 'Мой YouTube Канал',
        description: 'Блок с ссылкой на мой ютуб канал',
        icon: 'video-alt3',
        category: 'layout',
        keywords: [
            'youtube ютуб',
            'otfm'
        ],

        edit: function() {
            return tubeHtml;
        },

        save: function() {
            return tubeHtml;
        }
    } );

}(
    window.wp
    ) );

