// itemStyles.ts
import { StyleSheet } from 'react-native';

const itemStyles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginLeft: 5,
    marginRight: 5,
    padding: 2,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  itemContent: {
    flex: 1,
    paddingVertical: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'TitilliumWeb-Regular'
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default itemStyles;
