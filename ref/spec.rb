:user
  - zone_id
  - fname
  - lname
  - email
  - phone
  - password_digest
  - session_token
  - img_url
  :addresses
    - user_id
    - street
    - city
    - state
    - zipcode
  :credit_cards
    - user_id
    - last_four
    - type
  :orders
    - user_id
    - status
    - date
    - time
    - subtotal
    :order_items
      - item_id
      - order_id
  :cart
    - user_id
    - subtotal
    :cart_items
      - item_id
      - cart_id

:zone
  - name
  - zipcodes
  :stores
    - zone_id
    - name
    - street
    - city
    - state
    - zipcode
    - img_url
    :departments
      - store_id
      - name
      :aisles
        - dept_id
        - name
        :items
          - aisle_id
          - name
          - brand
          - price
          - size
          - type
          - sale_pct
          - img_url
