module.exports = {
  common: {
    save: 'Guardar',
    view: 'Ver',
    edit: 'Editar',
  },
  welcome_page: {
    page_title: 'Bienvenido a Clases',
    page_info: `<p>Aquí podrás replicar la estructura organizativa del centro educativo.</p>
      <p>El primer paso es crear el <strong>Árbol</strong>. Este árbol se utiliza para representar la estructura básica de la organización.</p>
      <p>Por ejemplo, si tienes un colegio con programas educativos (primaria y secundaria) que tiene cursos (primero, segundo, tercero...) y en cada uno de ellos se divide a los alumnos en grupos que comparten clase (grupo A, grupo B, ...), será necesario que el sistema conozca esta lógica. Sólo tendrás que crear el árbol una vez (pero podrás añadir nuevos niveles posteriormente).</p>
      <p>Luego, en la sección <strong>Organización</strong> podrás definir el conjunto de datos (información concreta) para cada nivel y los permisos que deseas asignar. Por último, en la sección de <strong>Clases admin</strong> podrás asignar alumnos, tutores y definir los datos previstos en el paso anterior. Estas secciones sólo estarán disponibles una vez que hayas creado el árbol.</p>
      <p>Puedes empezar descargando nuestro archivo de estructura básica y editándolo en tu aplicación de hoja de cálculo favorita o crear el árbol de niveles manualmente desde Leemons.</p>`,
    hide_info_label:
      'Ok, entendido. Cuando la configuración esté completa, no mostrar más esta información.',
    bulk_load: {
      title: 'Carga masiva',
      description:
        'Descarga el archivo básico y súbelo una vez completado (si necesitas más ayuda, puedes ver esta guía básica sobre el funcionamiento de nuestro sistema de estructuras).',
      btn: 'Cargar',
    },
    manual_load: {
      title: 'Creación manual',
      description:
        'Define tu propia estructura utilizando nuestro editor visual (aquí tiene algunos ejemplos de estructuras básicas que puede utilizar como plantilla).',
      btn: 'Crear árbol',
    },
  },
  tree_page: {
    page_title: 'Árbol',
    page_info:
      'Utiliza el botón <span class="w-5 h-5 border-2 border-primary rounded-full leading-none inline-block text-primary font-semibold text-center">+</span> para crear cada nivel y, a continuación, utiliza el panel derecho para configurar el conjunto de datos del nivel.',
  },
};
