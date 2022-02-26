'use strict';

/**
 * pages-report service.
 */

module.exports = {
  pagesReport: async () => {
    try {
      // fetching the data
      // we dont really need contentSections for this example.
      // its kept here, just for your reference
      const entries = await strapi.entityService.findMany('api::page.page', {
        fields: ['id', 'shortName'],
        populate: {
          metadata: {
            fields: ['metaTitle']
          },
          contentSections: {
            populate: '*'
          }
        }
      });

      // reducing the data to a simple array
      let entriesReduced;
      if (entries && Array.isArray(entries)) {
        entriesReduced = entries.reduce((acc, item) => {
          acc = acc || [];
          console.log(acc);
          acc.push({
            id: item.id,
            name: item.shortName || '',
            metaTitle: item.metadata?.metaTitle || ''
          });
          return acc;
        }, [])

        // returning the reduced data
        return entriesReduced;
      }
    } catch (err) {
      return err;
    }
  }
}
