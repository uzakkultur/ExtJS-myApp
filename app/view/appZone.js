Ext.define('myApp.view.appZone', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.appzone',
  requires: [
    'myApp.store.modulesTreeDs',
    'Ext.tab.Panel',
    'Ext.tab.Tab',
    'Ext.tree.Panel',
    'Ext.tree.View'
  ],
  layout: 'border',
  header: false,
  title: '',
  items: [{
    xtype: 'tabpanel',
    region: 'center',
    itemId: 'mainZone',
    header: false,
    title: '',
    items: [{
      xtype: 'panel',
      itemId: 'startappPanel',
      title: 'Dashboard',
      bodyPadding: 5,
      html: 'myApp Dashboard',
      region: 'center'
    }]
  }, {
    xtype: 'panel',
    itemId: 'accessPanel',
    region: 'west',
    split: true,
    width: 180,
    layout: 'fit',
    title: 'App modules',
    items: [{
      xtype: 'treepanel',
      header: false,
      title: 'My tree Panel',
      store: Ext.create('myApp.store.modulesTreeDs', {
        storeId: 'accessmodulesDs'
      }),
      rootVisible: false
    }]
  }]
});
