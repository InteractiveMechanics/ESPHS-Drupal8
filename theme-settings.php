<?php

function historic_form_system_theme_settings_alter (&$form, \Drupal\Core\Form\FormStateInterface &$form_state, $form_id = NULL) {
    // Work-around for a core bug affecting admin themes. See issue #943212.
    if (isset($form_id)) {
        return;
    }

    $form['press_room_options'] = array(
      '#type'            => 'fieldset',
      '#title'           => t('Press Room Options'),
    );
    $form['press_room_options']['press_contact_1'] = array(
        '#type'          => 'textarea',
        '#title'         => t('Press Contact 1'),
        '#default_value' => theme_get_setting('press_contact_1'),
        '#description'   => t("The press area's primary press contact, as HTML."),
    );
    $form['press_room_options']['press_contact_2'] = array(
        '#type'          => 'textarea',
        '#title'         => t('Press Contact 2'),
        '#default_value' => theme_get_setting('press_contact_2'),
        '#description'   => t("The press area's secondary press contact, as HTML."),
    );
    $form['press_room_options']['press_password'] = array(
        '#type'          => 'textfield',
        '#title'         => t('Press Password Value'),
        '#default_value' => theme_get_setting('press_password'),
        '#description'   => t("Update the password for the press images and videos. Default: prison"),
    );
    

    $form['sitewide_options'] = array(
      '#type'            => 'fieldset',
      '#title'           => t('Sitewide Theme Options'),
    );
    $form['sitewide_options']['tracking_pixel'] = array(
        '#type'          => 'textarea',
        '#title'         => t('Tracking Pixel'),
        '#default_value' => theme_get_setting('tracking_pixel'),
        '#description'   => t("Insert the HTML script code(s) that contain the tracking pixel for the Historic Site. Default: none"),
    );
    $form['sitewide_options']['ticket_purchase_text'] = array(
        '#type'          => 'textfield',
        '#title'         => t('Ticketing Buy Button Text'),
        '#default_value' => theme_get_setting('ticket_purchase_text'),
        '#description'   => t("Update the text for the 'Purchase Tickets' buttons in the menus. Default: Purchase Tickets"),
    );
    $form['sitewide_options']['hours_of_operation'] = array(
      '#type'            => 'textfield',
      '#title'           => t('Hours of Operation'),
      '#default_value'   => theme_get_setting('hours_of_operation'),
      '#description'     => t("Check this box to indicate that Eastern State is closed today. Default: 10:00am to 5:00pm"),
    );
    $form['sitewide_options']['closed_today'] = array(
      '#type'            => 'checkbox',
      '#title'           => t('Is Eastern State closed today?'),
      '#default_value'   => theme_get_setting('closed_today'),
      '#description'     => t("Check this box to indicate that Eastern State is closed today. Default: unchecked"),
    );


    $form['promo_display'] = array(
      '#type'            => 'fieldset',
      '#title'           => t('TBTW Promo Display Options'),
    );
    $form['promo_display']['promo_text'] = array(
      '#type'            => 'textfield',
      '#title'           => t('Promo Text'),
      '#default_value'   => theme_get_setting('promo_text'),
      '#description'     => t("The text value of the promo for Terror Behind the Walls. Default: A Massive Haunted House in a Real Prison"),
    );
    $form['promo_display']['promo_url'] = array(
      '#type'            => 'textfield',
      '#title'           => t('Promo URL'),
      '#default_value'   => theme_get_setting('promo_url'),
      '#description'     => t("The URL to link to for the promo for Terror Behind the Walls. Default: https://www.easternstate.org/halloween/"),
    );
    $form['promo_display']['promo_start_date'] = array(
      '#type'            => 'date',
      '#title'           => t('Promo Start Date'),
      '#default_value'   => theme_get_setting('promo_start_date'),
      '#description'     => t("The start date to display the promo for Terror Behind the Walls."),
    );
    $form['promo_display']['promo_end_date'] = array(
      '#type'            => 'date',
      '#title'           => t('Promo End Date'),
      '#default_value'   => theme_get_setting('promo_end_date'),
      '#description'     => t("The end date to display the promo for Terror Behind the Walls."),
    );


    $form['awards_display'] = array(
      '#type'            => 'fieldset',
      '#title'           => t('Award Display Options'),
    );
    $form['awards_display']['show_prisons_today_award'] = array(
      '#type'            => 'checkbox',
      '#title'           => t('Display the 2017 AAM Award Ribbon for Prisons Today?'),
      '#default_value'   => theme_get_setting('show_prisons_today_award'),
      '#description'     => t("Check this box to display the 2017 AAM Award Ribbon for Prisons Today. Default: unchecked"),
    );
}